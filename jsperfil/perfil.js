/**
 * perfil.js
 * Maneja la funcionalidad de la página de perfil del usuario
 */

/**
 * Base de datos simulada de usuario en localStorage
 */
function obtenerUsuario() {
  const usuario = localStorage.getItem("usuario")
  if (!usuario) {
    // Usuario por defecto si no existe
    const usuarioDefault = {
      nombre: "Usuario X",
      email: "usuario@gmail.com",
      telefono: "+5939999999999",
      direccion: "Calle Principal 123, Quito",
      fechaRegistro: new Date().toISOString(),
    }
    localStorage.setItem("usuario", JSON.stringify(usuarioDefault))
    return usuarioDefault
  }
  return JSON.parse(usuario)
}

/**
 * Guardar usuario en localStorage
 */
function guardarUsuario(usuario) {
  localStorage.setItem("usuario", JSON.stringify(usuario))
}

/**
 * Obtener pedidos del localStorage
 */
function obtenerPedidos() {
  const pedidos = localStorage.getItem("pedidos")
  return pedidos ? JSON.parse(pedidos) : []
}

/**
 * Obtener reservas del localStorage
 */
function obtenerReservas() {
  const reservas = localStorage.getItem("reservas")
  return reservas ? JSON.parse(reservas) : []
}

/**
 * Obtener favoritos del localStorage
 */
function obtenerFavoritos() {
  const favoritos = localStorage.getItem("favoritos")
  return favoritos ? JSON.parse(favoritos) : []
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Cargar información del usuario
  cargarInformacionUsuario()

  // Cargar pedidos
  cargarPedidos()

  // Cargar reservas
  cargarReservas()

  // Cargar favoritos
  cargarFavoritos()

  // Configurar formulario de edición
  configurarFormularioEdicion()

  // Actualizar contador del carrito
  const actualizarContadorCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    const contador = document.getElementById("contadorCarrito")
    contador.textContent = carrito.length
  }
  actualizarContadorCarrito()
})

/**
 * Cargar información del usuario en la página
 */
function cargarInformacionUsuario() {
  const usuario = obtenerUsuario()

  // Actualizar información en el header
  document.getElementById("profileName").textContent = usuario.nombre
  document.getElementById("profileEmail").textContent = usuario.email

  // Formatear fecha de registro
  const fechaRegistro = new Date(usuario.fechaRegistro)
  const fechaFormateada = fechaRegistro.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
  })
  document.getElementById("profileMember").textContent = `Miembro desde: ${fechaFormateada}`

  // Cargar datos en el formulario de edición
  document.getElementById("editNombre").value = usuario.nombre
  document.getElementById("editGmail").value = usuario.email
  document.getElementById("editTelefono").value = usuario.telefono || ""
  document.getElementById("editDireccion").value = usuario.direccion || ""
}

/**
 * Toggle del formulario de edición
 */
function toggleEditarPerfil() {
  const editForm = document.getElementById("editProfileForm")
  if (editForm.style.display === "none" || editForm.style.display === "") {
    editForm.style.display = "block"
    editForm.scrollIntoView({ behavior: "smooth", block: "nearest" })
  } else {
    editForm.style.display = "none"
  }
}

/**
 * Configurar formulario de edición
 */
function configurarFormularioEdicion() {
  const form = document.getElementById("profileForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Obtener datos del formulario
    const usuario = obtenerUsuario()
    usuario.nombre = document.getElementById("editNombre").value
    usuario.email = document.getElementById("editEmail").value
    usuario.telefono = document.getElementById("editTelefono").value
    usuario.direccion = document.getElementById("editDireccion").value

    // Guardar usuario actualizado
    guardarUsuario(usuario)

    // Actualizar información en la página
    cargarInformacionUsuario()

    // Ocultar formulario
    toggleEditarPerfil()

    // Mostrar mensaje de éxito
    alert("Perfil actualizado exitosamente")
  })
}

/**
 * Cargar pedidos del usuario
 */
function cargarPedidos() {
  const pedidos = obtenerPedidos()
  const container = document.getElementById("ordersContainer")

  if (pedidos.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-bag-x display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">No tienes pedidos aún</h4>
          <p class="text-muted">Comienza a comprar y tus pedidos aparecerán aquí</p>
          <a href="bicicletas.html" class="btn btn-primary mt-3">
            <i class="bi bi-shop me-2"></i>Ir a Comprar
          </a>
        </div>
      </div>
    `
    return
  }

  // Ordenar pedidos por fecha (más reciente primero)
  pedidos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  container.innerHTML = pedidos
    .map(
      (pedido) => `
    <div class="col-12 mb-3">
      <div class="product-card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-2">
              <strong>Pedido #${pedido.id}</strong>
              <p class="text-muted small mb-0">${new Date(pedido.fecha).toLocaleDateString("es-ES")}</p>
            </div>
            <div class="col-md-3">
              <p class="mb-0"><strong>${pedido.productos.length}</strong> productos</p>
            </div>
            <div class="col-md-2">
              <span class="badge bg-${pedido.estado === "entregado" ? "success" : pedido.estado === "enviado" ? "info" : "warning"}">
                ${pedido.estado.charAt(0).toUpperCase() + pedido.estado.slice(1)}
              </span>
            </div>
            <div class="col-md-3">
              <strong class="text-primary">$${pedido.total.toFixed(2)}</strong>
            </div>
            <div class="col-md-2 text-end">
              <button class="btn btn-sm btn-outline-primary" onclick="verDetallesPedido(${pedido.id})">
                <i class="bi bi-eye me-1"></i>Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

/**
 * Cargar reservas del usuario
 */
function cargarReservas() {
  const reservas = obtenerReservas()
  const container = document.getElementById("reservationsContainer")

  if (reservas.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-calendar-x display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">No tienes reservas aún</h4>
          <p class="text-muted">Reserva un servicio y aparecerá aquí</p>
          <a href="servicios.html" class="btn btn-primary mt-3">
            <i class="bi bi-tools me-2"></i>Ver Servicios
          </a>
        </div>
      </div>
    `
    return
  }

  // Ordenar reservas por fecha (más reciente primero)
  reservas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  container.innerHTML = reservas
    .map(
      (reserva) => `
    <div class="col-md-6 mb-3">
      <div class="product-card">
        <div class="card-body">
          <h5 class="mb-3">${reserva.servicio}</h5>
          <div class="mb-2">
            <i class="bi bi-calendar3 me-2 text-primary"></i>
            <strong>Fecha:</strong> ${new Date(reserva.fecha).toLocaleDateString("es-ES")}
          </div>
          <div class="mb-2">
            <i class="bi bi-clock me-2 text-primary"></i>
            <strong>Hora:</strong> ${reserva.hora}
          </div>
          <div class="mb-2">
            <i class="bi bi-cash me-2 text-primary"></i>
            <strong>Precio:</strong> $${reserva.precio}
          </div>
          ${reserva.nota ? `<div class="mt-3"><strong>Nota:</strong><p class="text-muted mb-0">${reserva.nota}</p></div>` : ""}
          <div class="mt-3">
            <button class="btn btn-sm btn-outline-danger" onclick="cancelarReserva('${reserva.fechaReserva}')">
              <i class="bi bi-x-circle me-1"></i>Cancelar Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

/**
 * Cargar favoritos del usuario
 */
function cargarFavoritos() {
  const favoritos = obtenerFavoritos()
  const container = document.getElementById("favoritesContainer")

  if (favoritos.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-heart display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">No tienes favoritos aún</h4>
          <p class="text-muted">Marca tus productos favoritos y aparecerán aquí</p>
          <a href="bicicletas.html" class="btn btn-primary mt-3">
            <i class="bi bi-bicycle me-2"></i>Explorar Bicicletas
          </a>
        </div>
      </div>
    `
    return
  }

  container.innerHTML = favoritos
    .map(
      (producto) => `
    <div class="col-md-4 mb-3">
      <div class="product-card">
        <div class="product-image">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <button class="btn-favorite active" onclick="toggleFavorito(${producto.id})">
            <i class="bi bi-heart-fill"></i>
          </button>
        </div>
        <div class="product-body">
          <h5 class="product-title">${producto.nombre}</h5>
          <div class="product-price">$${producto.precio.toFixed(2)}</div>
          <button class="btn btn-primary w-100 mt-2" onclick="agregarAlCarrito(${producto.id})">
            <i class="bi bi-cart-plus me-2"></i>Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

/**
 * Ver detalles de un pedido
 */
function verDetallesPedido(pedidoId) {
  const pedidos = obtenerPedidos()
  const pedido = pedidos.find((p) => p.id === pedidoId)

  if (!pedido) {
    alert("Pedido no encontrado")
    return
  }

  // Crear modal con detalles del pedido
  const modalHTML = `
    <div class="modal fade" id="pedidoModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalles del Pedido #${pedido.id}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p><strong>Fecha:</strong> ${new Date(pedido.fecha).toLocaleDateString("es-ES")}</p>
            <p><strong>Estado:</strong> <span class="badge bg-${pedido.estado === "entregado" ? "success" : pedido.estado === "enviado" ? "info" : "warning"}">${pedido.estado}</span></p>
            <hr>
            <h6>Productos:</h6>
            <ul class="list-group">
              ${pedido.productos.map((p) => `<li class="list-group-item">${p.nombre} x${p.cantidad} - $${(p.precio * p.cantidad).toFixed(2)}</li>`).join("")}
            </ul>
            <hr>
            <p class="text-end"><strong>Total: $${pedido.total.toFixed(2)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  `

  // Eliminar modal anterior si existe
  const existingModal = document.getElementById("pedidoModal")
  if (existingModal) {
    existingModal.remove()
  }

  // Agregar modal al body
  document.body.insertAdjacentHTML("beforeend", modalHTML)

  // Abrir modal
  const bootstrap = window.bootstrap // Assuming bootstrap is loaded globally
  const modal = new bootstrap.Modal(document.getElementById("pedidoModal"))
  modal.show()
}

/**
 * Cancelar reserva
 */
function cancelarReserva(fechaReserva) {
  if (!confirm("¿Estás seguro de que quieres cancelar esta reserva?")) {
    return
  }

  const reservas = obtenerReservas()
  const reservasActualizadas = reservas.filter((r) => r.fechaReserva !== fechaReserva)

  localStorage.setItem("reservas", JSON.stringify(reservasActualizadas))

  // Recargar reservas
  cargarReservas()

  alert("Reserva cancelada exitosamente")
}

/**
 * Toggle favorito
 */
function toggleFavorito(productoId) {
  const favoritos = obtenerFavoritos()

  const index = favoritos.findIndex((f) => f.id === productoId)

  if (index > -1) {
    favoritos.splice(index, 1)
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos))

  // Recargar favoritos
  cargarFavoritos()
}
