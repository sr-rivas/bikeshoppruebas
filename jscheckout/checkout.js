/**
 * checkout.js
 * Maneja la funcionalidad del proceso de checkout y creación de pedidos
 */

// Import Bootstrap
const bootstrap = window.bootstrap

/**
 * Función para obtener el carrito desde localStorage
 */
function obtenerCarrito() {
  const storedCart = localStorage.getItem("cart")
  return storedCart ? JSON.parse(storedCart) : []
}

/**
 * Función para guardar pedido en localStorage
 */
function guardarPedido(pedido) {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []
  pedidos.push(pedido)
  localStorage.setItem("pedidos", JSON.stringify(pedidos))
}

/**
 * Función para limpiar el carrito
 */
function limpiarCarrito() {
  localStorage.removeItem("cart")
  actualizarContadorCarrito()
}

/**
 * Función para actualizar contador del carrito
 */
function actualizarContadorCarrito() {
  const cart = obtenerCarrito()
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0)
    cartCount.textContent = totalItems
  }
}

/**
 * Función para generar ID único de pedido
 */
function generarIdPedido() {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${timestamp}${random}`
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Verificar si hay productos en el carrito
  const cart = obtenerCarrito()
  if (cart.length === 0) {
    // Redirigir al carrito si está vacío
    window.location.href = "carrito.html"
    return
  }

  // Actualizar contador del carrito
  actualizarContadorCarrito()

  // Renderizar resumen de productos
  renderizarResumenProductos()

  // Cargar datos del usuario si existen
  cargarDatosUsuario()

  // Configurar event listeners
  configurarEventListeners()

  // Calcular totales
  calcularTotales()
})

/**
 * Renderizar resumen de productos en el checkout
 */
function renderizarResumenProductos() {
  const cart = obtenerCarrito()
  const container = document.getElementById("resumenProductos")

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="d-flex align-items-center mb-2 p-2">
      <img src="${item.imagen}" alt="${item.nombre}" class="rounded me-2" style="width: 50px; height: 50px; object-fit: cover;">
      <div class="flex-grow-1">
        <h6 class="mb-1 small">${item.nombre}</h6>
        <small class="text-muted d-block">Cantidad: ${item.cantidad}</small>
        ${item.color ? `<small class="text-muted d-block">Color: ${item.color}</small>` : ""}
        ${item.talla ? `<small class="text-muted d-block">Talla: ${item.talla}</small>` : ""}
      </div>
      <strong class="small">$${(item.precio * item.cantidad).toFixed(2)}</strong>
    </div>
  `,
    )
    .join("")
}

/**
 * Calcular totales del pedido
 */
function calcularTotales() {
  const cart = obtenerCarrito()

  // Calcular subtotal
  const subtotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0)

  // Calcular IVA (15%)
  const iva = subtotal * 0.15

  // Calcular envío
  const envio = 15.0

  // Calcular total
  const total = subtotal + iva + envio

  // Actualizar DOM
  document.getElementById("resumenSubtotal").textContent = `$${subtotal.toFixed(2)}`
  document.getElementById("resumenIva").textContent = `$${iva.toFixed(2)}`
  document.getElementById("resumenEnvio").textContent = `$${envio.toFixed(2)}`
  document.getElementById("resumenTotal").textContent = `$${total.toFixed(2)}`

  return { subtotal, iva, envio, total }
}

/**
 * Cargar datos del usuario desde localStorage
 */
function cargarDatosUsuario() {
  const usuario = JSON.parse(localStorage.getItem("usuario"))

  if (usuario) {
    document.getElementById("nombre").value = usuario.nombre || ""
    document.getElementById("email").value = usuario.email || ""
    document.getElementById("telefono").value = usuario.telefono || ""
  }
}

/**
 * Configurar event listeners
 */
function configurarEventListeners() {
  // Event listener para cambio de método de pago
  const radioButtons = document.querySelectorAll('input[name="metodoPago"]')
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      const infoTransferencia = document.getElementById("infoTransferencia")
      if (this.value === "transferencia") {
        infoTransferencia.style.display = "block"
      } else {
        infoTransferencia.style.display = "none"
      }
    })
  })

  // Event listener para botón de confirmar pedido
  const btnConfirmar = document.getElementById("btnConfirmarPedido")
  btnConfirmar.addEventListener("click", confirmarPedido)
}

/**
 * Validar formulario de checkout
 */
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim()
  const email = document.getElementById("email").value.trim()
  const telefono = document.getElementById("telefono").value.trim()
  const identificacion = document.getElementById("identificacion").value.trim()
  const provincia = document.getElementById("provincia").value
  const canton = document.getElementById("canton").value.trim()
  const parroquia = document.getElementById("parroquia").value.trim()
  const direccionDetallada = document.getElementById("direccionDetallada").value.trim()

  // Validar campos obligatorios
  if (!nombre || !email || !telefono || !identificacion || !provincia || !canton || !parroquia || !direccionDetallada) {
    alert("Por favor completa todos los campos obligatorios marcados con *")
    return false
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un correo electrónico válido")
    return false
  }

  return true
}

/**
 * Confirmar pedido y procesarlo
 */
function confirmarPedido() {
  // Validar formulario
  if (!validarFormulario()) {
    return
  }

  // Obtener datos del formulario
  const datosCliente = {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    identificacion: document.getElementById("identificacion").value.trim(),
  }

  const direccion = {
    provincia: document.getElementById("provincia").value,
    canton: document.getElementById("canton").value.trim(),
    parroquia: document.getElementById("parroquia").value.trim(),
    codigoPostal: document.getElementById("codigoPostal").value.trim(),
    direccionDetallada: document.getElementById("direccionDetallada").value.trim(),
  }

  const metodoPago = document.querySelector('input[name="metodoPago"]:checked').value

  // Obtener productos del carrito
  const cart = obtenerCarrito()

  // Calcular totales
  const totales = calcularTotales()

  // Crear objeto de pedido
  const pedido = {
    id: generarIdPedido(),
    fecha: new Date().toISOString(),
    cliente: datosCliente,
    direccion: direccion,
    metodoPago: metodoPago,
    productos: cart,
    subtotal: totales.subtotal,
    iva: totales.iva,
    envio: totales.envio,
    total: totales.total,
    estado: "pendiente",
  }

  // Guardar pedido en localStorage
  guardarPedido(pedido)

  // Mostrar modal de confirmación
  mostrarConfirmacion(pedido)

  // Limpiar carrito
  limpiarCarrito()
}

/**
 * Mostrar modal de confirmación de pedido
 */
function mostrarConfirmacion(pedido) {
  const resumenModal = document.getElementById("resumenPedidoModal")

  // Formatear fecha
  const fechaFormateada = new Date(pedido.fecha).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  resumenModal.innerHTML = `
  <div class="alert alert-light">

    <h6 class="mb-3">📦 Información del Pedido</h6>
    <p class="mb-1"><strong>Número de Pedido:</strong> #${pedido.id}</p>
    <p class="mb-1"><strong>Fecha:</strong> ${fechaFormateada}</p>
    <p class="mb-2"><strong>Método de Pago:</strong> ${
      pedido.metodoPago === "efectivo"
        ? "Pago Contra Entrega"
        : "Transferencia Bancaria"
    }</p>

    <hr>

    <h6 class="mb-3">👤 Datos del Cliente</h6>
    <p class="mb-1"><strong>Nombre:</strong> ${pedido.cliente.nombre}</p>
    <p class="mb-1"><strong>Correo:</strong> ${pedido.cliente.email}</p>
    <p class="mb-1"><strong>Teléfono:</strong> ${pedido.cliente.telefono}</p>
    <p class="mb-2"><strong>Identificación:</strong> ${pedido.cliente.identificacion}</p>

    <hr>

    <h6 class="mb-3">📍 Dirección de Envío</h6>
    <p class="mb-1">
      ${pedido.direccion.provincia},
      ${pedido.direccion.canton},
      ${pedido.direccion.parroquia}
    </p>
    <p class="mb-1"><strong>Dirección:</strong> ${pedido.direccion.direccionDetallada}</p>
    ${
      pedido.direccion.codigoPostal
        ? `<p class="mb-2"><strong>Código Postal:</strong> ${pedido.direccion.codigoPostal}</p>`
        : ""
    }

    <hr>

    <h6 class="mb-2">💰 Total</h6>
    <p class="fs-5 text-primary fw-bold">$${pedido.total.toFixed(2)}</p>

  </div>
`


  // Mostrar modal
  const modal = new bootstrap.Modal(document.getElementById("confirmacionModal"))
  modal.show()

  // Prevenir cierre accidental del modal
  const modalElement = document.getElementById("confirmacionModal")
  modalElement.addEventListener("hidden.bs.modal", () => {
    // Redirigir al inicio después de cerrar el modal
    window.location.href = "index.html"
  })
}
