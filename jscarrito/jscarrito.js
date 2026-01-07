/**
 * carrito.js
 * Maneja la funcionalidad del carrito de compras con localStorage como base de datos
 */

/**
 * Función para obtener el carrito desde localStorage
 */
function obtenerCarrito() {
  const storedCart = localStorage.getItem("cart")
  return storedCart ? JSON.parse(storedCart) : []
}

/**
 * Función para guardar el carrito en localStorage
 */
function guardarCarrito(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  actualizarContadorCarrito()
}

/**
 * Función para actualizar el contador del carrito en todas las páginas
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
 * Inicialización cuando el DOM está listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Cargar contador del carrito
  actualizarContadorCarrito()

  // Renderizar productos del carrito
  renderizarCarrito()

  // Configurar botón de checkout
  configurarCheckout()
})

/**
 * Renderizar todos los productos del carrito
 */
function renderizarCarrito() {
  const cart = obtenerCarrito()
  const cartItems = document.getElementById("cartItems")
  const emptyCart = document.getElementById("emptyCart")
  const checkoutBtn = document.getElementById("checkoutBtn")

  // Verificar si el carrito está vacío
  if (cart.length === 0) {
    cartItems.innerHTML = ""
    emptyCart.style.display = "block"
    checkoutBtn.disabled = true
    return
  }

  emptyCart.style.display = "none"
  checkoutBtn.disabled = false

  // Limpiar contenedor
  cartItems.innerHTML = ""

  // Renderizar cada producto
  cart.forEach((item, index) => {
    const itemElement = crearElementoCarrito(item, index)
    cartItems.appendChild(itemElement)
  })

  // Actualizar resumen
  actualizarResumen()
}

/**
 * Crear elemento HTML para un producto del carrito
 */
function crearElementoCarrito(item, index) {
  const div = document.createElement("div")
  div.className = "product-card mb-3"

  const subtotal = item.precio * item.cantidad

  div.innerHTML = `
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-md-2 mb-3 mb-md-0">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid rounded">
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <h5 class="mb-1">${item.nombre}</h5>
                    <p class="text-muted small mb-0">${item.tipo}</p>
                    ${item.talla ? `<p class="text-muted small mb-0">Talla: Rin ${item.talla}</p>` : ""}
                    ${item.color ? `<p class="text-muted small mb-0">Color: ${item.color}</p>` : ""}
                </div>
                <div class="col-md-2 mb-3 mb-md-0">
                    <span class="text-muted small d-block mb-1">Precio</span>
                    <strong>$${item.precio.toFixed(2)}</strong>
                </div>
                <div class="col-md-2 mb-3 mb-md-0">
                    <span class="text-muted small d-block mb-1">Cantidad</span>
                    <div class="input-group input-group-sm" style="max-width: 120px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="actualizarCantidad(${index}, -1)">
                            <i class="bi bi-dash"></i>
                        </button>
                        <input type="number" class="form-control text-center" value="${item.cantidad}" min="1" readonly>
                        <button class="btn btn-outline-secondary" type="button" onclick="actualizarCantidad(${index}, 1)">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2">
                    <span class="text-muted small d-block mb-1">Subtotal</span>
                    <strong class="text-primary">$${subtotal.toFixed(2)}</strong>
                    <button class="btn btn-sm btn-danger mt-2 w-100" onclick="eliminarDelCarrito(${index})">
                        <i class="bi bi-trash me-1"></i>Eliminar
                    </button>
                </div>
            </div>
        </div>
    `

  return div
}

/**
 * Actualizar cantidad de un producto
 */
function actualizarCantidad(index, cambio) {
  const cart = obtenerCarrito()

  // Actualizar cantidad
  cart[index].cantidad += cambio

  // Eliminar si la cantidad es 0
  if (cart[index].cantidad <= 0) {
    eliminarDelCarrito(index)
    return
  }

  // Guardar carrito actualizado
  guardarCarrito(cart)

  // Re-renderizar
  renderizarCarrito()
}

/**
 * Eliminar producto del carrito
 */
function eliminarDelCarrito(index) {
  const cart = obtenerCarrito()
  cart.splice(index, 1)
  guardarCarrito(cart)

  // Re-renderizar
  renderizarCarrito()
}

/**
 * Actualizar resumen de compra
 */
function actualizarResumen() {
  const cart = obtenerCarrito()

  // Calcular subtotal
  const subtotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0)

  // Calcular IVA (13%)
  const iva = subtotal * 0.13

  // Calcular envío
  const envio = subtotal > 0 ? 15.0 : 0

  // Calcular total
  const total = subtotal + iva + envio

  // Actualizar DOM
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`
  document.getElementById("iva").textContent = `$${iva.toFixed(2)}`
  document.getElementById("envio").textContent = envio > 0 ? `$${envio.toFixed(2)}` : "Gratis"
  document.getElementById("total").textContent = `$${total.toFixed(2)}`
}

/**
 * Configurar botón de checkout
 */
function configurarCheckout() {
  const checkoutBtn = document.getElementById("checkoutBtn")

  checkoutBtn.addEventListener("click", () => {
    // Redirigir a página de checkout
    window.location.href = "checkout.html"
  })
}
