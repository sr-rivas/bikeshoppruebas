// ===================================
// BASE DE DATOS DE PRODUCTOS
// ===================================

// Array de productos - bicicletas
const bicicletas = [
  // Montaña
  {
    id: 1,
    nombre: "Elion Pro X1",
    categoria: "montana",
    tipo: "bicicleta",
    precio: 899.99,
    imagen: "img bicis/bicimonta.png",
    descripcion: "Marco de aluminio, 21 velocidades, Frenos de disco hidráulicos",
    marco: "Aluminio 6061",
    engranaje: "Shimano Deore 21v",
    frenos: "Disco hidráulico",
    colores: ["negro", "rojo", "azul"],
    tallas: [26, 27, 29],
    stock: true,
    nuevo: true,
    vendido: false,
    oferta: false,
  },
  {
    id: 2,
    nombre: "Trail Master 500",
    categoria: "montana",
    tipo: "bicicleta",
    precio: 1299.99,
    imagen: "img bicis/bicimtb.png",
    descripcion: "Marco de carbono, 27 velocidades, Suspensión completa",
    marco: "Carbono",
    engranaje: "Shimano SLX 27v",
    frenos: "Disco hidráulico",
    colores: ["negro", "blanco", "rojo"],
    tallas: [27, 29],
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: false,
  },
  // Ruta
  {
    id: 3,
    nombre: "Speed Racer 3000",
    categoria: "ruta",
    tipo: "bicicleta",
    precio: 1599.99,
    imagen: "img bicis/biciruta.png",
    descripcion: "Marco de carbono, 22 velocidades, Ultra ligera",
    marco: "Carbono de alta gama",
    engranaje: "Shimano 105 22v",
    frenos: "Disco hidráulico",
    colores: ["negro", "blanco", "azul"],
    tallas: [23, 25, 27],
    stock: true,
    nuevo: true,
    vendido: true,
    oferta: false,
  },
  {
    id: 4,
    nombre: "Aero Elite",
    categoria: "ruta",
    tipo: "bicicleta",
    precio: 2199.99,
    imagen: "img bicis/bicimixto.png",
    descripcion: "Diseño aerodinámico, 22 velocidades, Competición",
    marco: "Carbono aerodinámico",
    engranaje: "Shimano Ultegra 22v",
    frenos: "Disco hidráulico",
    colores: ["negro", "rojo"],
    tallas: [25, 27, 29],
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: true,
  },
  // Híbridas
  {
    id: 5,
    nombre: "Hybrid Comfort 200",
    categoria: "hibrida",
    tipo: "bicicleta",
    precio: 699.99,
    imagen: "img bicis/bicipremiun.png",
    descripcion: "Marco de aluminio, 21 velocidades, Versátil",
    marco: "Aluminio",
    engranaje: "Shimano Altus 21v",
    frenos: "V-Brake",
    colores: ["negro", "blanco", "azul"],
    tallas: [26, 27, 29],
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: false,
  },
  // Urbanas
  {
    id: 6,
    nombre: "City Cruiser",
    categoria: "urbana",
    tipo: "bicicleta",
    precio: 499.99,
    imagen: "img bicis/bicivictus.png",
    descripcion: "Marco de acero, 7 velocidades, Ideal para ciudad",
    marco: "Acero vintage",
    engranaje: "Shimano Tourney 7v",
    frenos: "V-Brake",
    colores: ["negro", "blanco", "rojo", "azul"],
    tallas: [26, 27],
    stock: true,
    nuevo: true,
    vendido: false,
    oferta: false,
  },
  {
    id: 7,
    nombre: "Urban Style 100",
    categoria: "urbana",
    tipo: "bicicleta",
    precio: 599.99,
    imagen: "img bicis/bicienduro.png",
    descripcion: "Marco de aluminio, Single speed, Minimalista",
    marco: "Aluminio ligero",
    engranaje: "Single speed",
    frenos: "Contrapedal",
    colores: ["negro", "blanco"],
    tallas: [26, 27],
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: true,
  },
  // BMX
  {
    id: 8,
    nombre: "BMX Pro Stunt",
    categoria: "bmx",
    tipo: "bicicleta",
    precio: 449.99,
    imagen: "img bicis/bicicletabmx.webp",
    descripcion: "Marco de acero cromoly, Freestyle",
    marco: "Acero cromoly",
    engranaje: "Single speed",
    frenos: "U-Brake trasero",
    colores: ["negro", "rojo", "azul"],
    tallas: [20],
    stock: true,
    nuevo: true,
    vendido: true,
    oferta: false,
  },
]

// Array de accesorios
const accesorios = [
  // Seguridad
  {
    id: 101,
    nombre: "Casco Pro Safety",
    categoria: "seguridad",
    tipo: "accesorio",
    subcategoria: "cascos",
    precio: 79.99,
    imagen: "img accesorios/casco.png",
    descripcion: "Casco con certificación, ajuste universal, reflectante",
    stock: true,
    nuevo: true,
    vendido: true,
    oferta: false,
  },
  {
    id: 102,
    nombre: "Luz LED Delantera",
    categoria: "seguridad",
    tipo: "accesorio",
    subcategoria: "luces",
    precio: 29.99,
    imagen: "img accesorios/luminaria.png",
    descripcion: "Luz LED blanca, 5 modos, recargable USB",
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: false,
  },
  {
    id: 103,
    nombre: "Candado U-Lock",
    categoria: "seguridad",
    tipo: "accesorio",
    subcategoria: "candados",
    precio: 49.99,
    imagen: "img accesorios/candadopremiun.webp",
    descripcion: "Candado en U, acero endurecido, incluye soporte",
    stock: true,
    nuevo: false,
    vendido: false,
    oferta: true,
  },
  // Mantenimiento
  {
    id: 104,
    nombre: "Kit Herramientas 15 en 1",
    categoria: "mantenimiento",
    tipo: "accesorio",
    subcategoria: "multiherramientas",
    precio: 24.99,
    imagen: "img accesorios/multiherramienta.jpg",
    descripcion: "15 funciones, acero inoxidable, compacto",
    stock: true,
    nuevo: true,
    vendido: true,
    oferta: false,
  },
  {
    id: 105,
    nombre: "Bomba Portátil Mini",
    categoria: "mantenimiento",
    tipo: "accesorio",
    subcategoria: "bombas",
    precio: 19.99,
    imagen: "img accesorios/nomba.jpg",
    descripcion: "Bomba compacta, compatible Presta y Schrader",
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: false,
  },
  // Comodidad
  {
    id: 106,
    nombre: "Guantes Acolchados",
    categoria: "comodidad",
    tipo: "accesorio",
    subcategoria: "guantes",
    precio: 34.99,
    imagen: "img accesorios/guantescomodos.jpg",
    descripcion: "Guantes con gel, transpirables, agarre antideslizante",
    stock: true,
    nuevo: true,
    vendido: false,
    oferta: false,
  },
  {
    id: 107,
    nombre: "Gafas Deportivas UV",
    categoria: "comodidad",
    tipo: "accesorio",
    subcategoria: "gafas",
    precio: 44.99,
    imagen: "img accesorios/gafas.jpg",
    descripcion: "Protección UV400, lentes intercambiables, ajuste perfecto",
    stock: true,
    nuevo: false,
    vendido: true,
    oferta: true,
  },
  {
    id: 108,
    nombre: "Sillín Ergonómico Gel",
    categoria: "comodidad",
    tipo: "accesorio",
    subcategoria: "sillines",
    precio: 59.99,
    imagen: "img accesorios/sillin.jpg",
    descripcion: "Sillín con gel, diseño anatómico, máxima comodidad",
    stock: true,
    nuevo: true,
    vendido: true,
    oferta: false,
  },
]

// Combinar todos los productos
const todosProductos = [...bicicletas, ...accesorios]

// Mapa de colores español a CSS
const coloresCSS = {
  negro: "#1a1a1a",
  rojo: "#dc3545",
  azul: "#0d6efd",
  blanco: "#ffffff",
  verde: "#198754",
  amarillo: "#ffc107",
  naranja: "#fd7e14",
  rosa: "#e91e8a",
  gris: "#6c757d",
  turquesa: "#20c997",
  morado: "#6f42c1",
}

// Función para obtener el color CSS
function obtenerColorCSS(colorNombre) {
  return coloresCSS[colorNombre.toLowerCase()] || colorNombre
}

// ===================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar carrito desde localStorage
  actualizarContadorCarrito()

  // Cargar productos destacados si estamos en la página principal
  if (document.getElementById("productsGrid")) {
    cargarProductosDestacados("nuevos")
  }

  // Inicializar event listeners
  inicializarEventListeners()

  // Inicializar carrusel de categorías
  inicializarCarruselCategorias()

  // Animación del hero
  animarHero()
})

// ===================================
// EVENT LISTENERS
// ===================================
function inicializarEventListeners() {
  // Botón de búsqueda
  const searchBtn = document.getElementById("searchBtn")
  const searchBar = document.getElementById("searchBar")
  const closeSearch = document.getElementById("closeSearch")
  const searchInput = document.getElementById("searchInput")

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchBar.classList.add("active")
      searchInput.focus()
    })
  }

  if (closeSearch) {
    closeSearch.addEventListener("click", () => {
      searchBar.classList.remove("active")
      searchInput.value = ""
      document.getElementById("searchResults").innerHTML = ""
    })
  }

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      busquedaEnTiempoReal(this.value)
    })
  }
  // Pestañas de productos destacados
  const productTabs = document.querySelectorAll("#productTabs .nav-link")
  productTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      productTabs.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")
      const filter = this.getAttribute("data-filter")
      cargarProductosDestacados(filter)
    })
  })
}

// ===================================
// CARRITO DE COMPRAS
// ===================================

// Obtener carrito del localStorage
function obtenerCarrito() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

// Guardar carrito en localStorage
function guardarCarrito(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  actualizarContadorCarrito()
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
  const cart = obtenerCarrito()
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0)
    cartCount.textContent = totalItems
  }
}

// Agregar producto al carrito
function agregarAlCarrito(productoId, color, talla) {
  const producto = todosProductos.find((p) => p.id === productoId)

  if (!producto || !producto.stock) {
    alert("Este producto no está disponible")
    return
  }

  const cart = obtenerCarrito()
  const itemExistente = cart.find((item) => item.id === productoId)

  if (itemExistente) {
    itemExistente.cantidad++
  } else {
    cart.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1,
      tipo: producto.tipo,
      color: color,
      talla: talla,
    })
  }

  guardarCarrito(cart)

  // Mostrar notificación
  mostrarNotificacion("Producto agregado al carrito")
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
  // Crear elemento de notificación
  const notificacion = document.createElement("div")
  notificacion.className = "alert alert-success position-fixed"
  notificacion.style.cssText = "top: 80px; right: 20px; z-index: 9999; animation: slideIn 0.3s ease;"
  notificacion.innerHTML = `
        <i class="bi bi-check-circle me-2"></i>${mensaje}
    `

  document.body.appendChild(notificacion)

  // Eliminar después de 3 segundos
  setTimeout(() => {
    notificacion.style.animation = "slideOut 0.3s ease"
    setTimeout(() => notificacion.remove(), 300)
  }, 3000)
}

// ===================================
// BÚSQUEDA DE PRODUCTOS
// ===================================

// Búsqueda en tiempo real
function busquedaEnTiempoReal(query) {
  const searchResults = document.getElementById("searchResults")

  if (query.length < 2) {
    searchResults.innerHTML = ""
    return
  }

  const resultados = todosProductos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(query.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(query.toLowerCase()),
  )

  if (resultados.length === 0) {
    searchResults.innerHTML = '<p class="text-center text-muted">No se encontraron resultados</p>'
    return
  }

  searchResults.innerHTML = resultados
    .slice(0, 5)
    .map(
      (producto) => `
        <div class="search-result-item" onclick="verProducto(${producto.id})">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div>
                <strong>${producto.nombre}</strong>
                <div class="text-muted small">${producto.categoria}</div>
                <div class="text-primary fw-bold">$${producto.precio.toFixed(2)}</div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Función de búsqueda general
function searchProducts() {
  const query = document.getElementById("searchInput").value
  if (query.length > 0) {
    // Redirigir a la página de bicicletas o accesorios con el término de búsqueda
    window.location.href = `bicicletas.html?search=${encodeURIComponent(query)}`
  }
}

// ===================================
// PRODUCTOS DESTACADOS
// ===================================

// Cargar productos destacados
function cargarProductosDestacados(filtro) {
  const productsGrid = document.getElementById("productsGrid")
  if (!productsGrid) return

  let productosFiltrados = []

  switch (filtro) {
    case "nuevos":
      productosFiltrados = todosProductos.filter((p) => p.nuevo)
      break
    case "vendidos":
      productosFiltrados = todosProductos.filter((p) => p.vendido)
      break
    case "ofertas":
      productosFiltrados = todosProductos.filter((p) => p.oferta)
      break
    default:
      productosFiltrados = todosProductos
  }

  // Limitar a 8 productos
  productosFiltrados = productosFiltrados.slice(0, 8)

  productsGrid.innerHTML = productosFiltrados.map((producto) => crearTarjetaProducto(producto)).join("")
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto) {
  const badgeText = producto.tipo === "bicicleta" ? producto.categoria : producto.subcategoria || producto.categoria
  const infoProducto =
    producto.tipo === "bicicleta"
      ? `${producto.marco} • ${producto.engranaje} • ${producto.frenos}`
      : producto.descripcion

  return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
                <div class="product-image" onclick="abrirModalProducto(${producto.id})">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <span class="product-badge">${badgeText}</span>
                </div>
                <div class="product-body">
                    <h5 class="product-title">${producto.nombre}</h5>
                    <p class="product-info">${infoProducto}</p>
                    <div class="product-divider"></div>
                    <div class="product-footer">
                        <div>
                            <div class="product-price">$${producto.precio.toFixed(2)}</div>
                            <div class="product-stock ${producto.stock ? "stock-available" : "stock-unavailable"}">
                                <i class="bi ${producto.stock ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i>
                                ${producto.stock ? "En Stock" : "Agotado"}
                            </div>
                        </div>
                        <button class="btn-add-cart" onclick="agregarAlCarrito(${producto.id})" ${!producto.stock ? "disabled" : ""}>
                            <i class="bi bi-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

// ===================================
// MODAL DE PRODUCTO
// ===================================

// Abrir modal de producto
function abrirModalProducto(productoId) {
  const producto = todosProductos.find((p) => p.id === productoId)
  if (!producto) return

  // Crear modal dinámicamente
  const modalHTML = `
        <div class="modal fade product-modal" id="productModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${producto.nombre}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${producto.imagen}" alt="${producto.nombre}" class="w-100 rounded">
                            </div>
                            <div class="col-md-6">
                                ${
                                  producto.tipo === "bicicleta"
                                    ? `
                                    <h6 class="fw-bold mb-2">Colores Disponibles:</h6>
                                    <div class="color-selector mb-3">
                                        ${producto.colores
                                          .map(
                                            (color) => `
                                            <div class="color-option" 
                                                 style="background-color: ${obtenerColorCSS(color)}; ${color.toLowerCase() === "blanco" ? "border: 2px solid #dee2e6;" : ""}" 
                                                 title="${color.charAt(0).toUpperCase() + color.slice(1)}" 
                                                 data-color="${color}">
                                            </div>
                                        `,
                                          )
                                          .join("")}
                                    </div>
                                    
                                    <h6 class="fw-bold mb-2">Tallas Disponibles (Rin):</h6>
                                    <div class="size-selector mb-3">
                                        ${producto.tallas
                                          .map(
                                            (talla) => `
                                            <button class="size-option" data-talla="${talla}">${talla}"</button>
                                        `,
                                          )
                                          .join("")}
                                    </div>
                                    
                                    <h6 class="fw-bold mb-2">Especificaciones:</h6>
                                    <ul class="mb-3">
                                        <li><strong>Marco:</strong> ${producto.marco}</li>
                                        <li><strong>Engranaje:</strong> ${producto.engranaje}</li>
                                        <li><strong>Frenos:</strong> ${producto.frenos}</li>
                                    </ul>
                                `
                                    : `
                                    <h6 class="fw-bold mb-2">Descripción:</h6>
                                    <p class="mb-3">${producto.descripcion}</p>
                                `
                                }
                                
                                <div class="mt-4">
                                    <h3 class="text-primary mb-3">$${producto.precio.toFixed(2)}</h3>
                                    <button class="btn btn-primary btn-lg w-100" 
                                            onclick="agregarAlCarritoDesdeModal(${producto.id})" 
                                            ${!producto.stock ? "disabled" : ""}>
                                        <i class="bi bi-cart-plus me-2"></i>Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

  // Eliminar modal anterior si existe
  const existingModal = document.getElementById("productModal")
  if (existingModal) {
    existingModal.remove()
  }

  // Agregar modal al body
  document.body.insertAdjacentHTML("beforeend", modalHTML)

  // Abrir modal
  const bootstrap = window.bootstrap
  const modal = new bootstrap.Modal(document.getElementById("productModal"))
  modal.show()

  // Event listeners para colores
  document.querySelectorAll(".color-option").forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".color-option").forEach((o) => o.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Event listeners para tallas
  document.querySelectorAll(".size-option").forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".size-option").forEach((o) => o.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Seleccionar el primer color y talla por defecto si es bicicleta
  if (producto.tipo === "bicicleta") {
    const firstColor = document.querySelector(".color-option")
    const firstSize = document.querySelector(".size-option")
    if (firstColor) firstColor.classList.add("active")
    if (firstSize) firstSize.classList.add("active")
  }
}

function agregarAlCarritoDesdeModal(productoId) {
  const producto = todosProductos.find((p) => p.id === productoId)
  if (!producto) return

  let color = null
  let talla = null

  // Obtener color y talla seleccionados si es bicicleta
  if (producto.tipo === "bicicleta") {
    const colorSeleccionado = document.querySelector(".color-option.active")
    const tallaSeleccionada = document.querySelector(".size-option.active")

    if (!colorSeleccionado || !tallaSeleccionada) {
      alert("Por favor selecciona un color y una talla")
      return
    }

    color = colorSeleccionado.getAttribute("data-color")
    talla = tallaSeleccionada.getAttribute("data-talla")
  }

  // Agregar al carrito con color y talla
  agregarAlCarrito(productoId, color, talla)

  // Cerrar modal
  const modal = window.bootstrap.Modal.getInstance(document.getElementById("productModal"))
  if (modal) {
    modal.hide()
  }
}

// ===================================
// CARRUSEL DE CATEGORÍAS
// ===================================

// Inicializar carrusel de categorías
function inicializarCarruselCategorias() {
  const categoryItems = document.querySelectorAll(".category-item")

  categoryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const categoria = this.getAttribute("data-category")
      window.location.href = `bicicletas.html?cat=${categoria}`
    })
  })
}

// ===================================
// ANIMACIONES
// ===================================

// Animar hero
function animarHero() {
  const fadeElements = document.querySelectorAll(".fade-in-text")
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, index * 500)
  })
}

// ===================================
// FUNCIONES AUXILIARES
// ===================================

// Ver producto (redirigir a la página correspondiente)
function verProducto(productoId) {
  const producto = todosProductos.find((p) => p.id === productoId)
  if (producto) {
    if (producto.tipo === "bicicleta") {
      window.location.href = `bicicletas.html?id=${productoId}`
    } else {
      window.location.href = `accesorios.html?id=${productoId}`
    }
  }
}

// Formatear precio
function formatearPrecio(precio) {
  return `$${precio.toFixed(2)}`
}

// Validar email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// ===================================
// FORMULARIOS
// ===================================

// Validar formulario genérico
function validarFormulario(formId) {
  const form = document.getElementById(formId)
  if (!form) return false

  const inputs = form.querySelectorAll("input[required], textarea[required], select[required]")
  let valido = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("is-invalid")
      valido = false
    } else {
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    }

    // Validar email
    if (input.type === "email" && input.value && !validarEmail(input.value)) {
      input.classList.add("is-invalid")
      valido = false
    }
  })

  return valido
}

// Limpiar formulario
function limpiarFormulario(formId) {
  const form = document.getElementById(formId)
  if (form) {
    form.reset()
    form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
      input.classList.remove("is-valid", "is-invalid")
    })
  }
}

// ===================================
// EXPORTAR DATOS PARA OTRAS PÁGINAS
// ===================================
window.bicicletas = bicicletas
window.accesorios = accesorios
window.todosProductos = todosProductos
window.agregarAlCarrito = agregarAlCarrito
window.abrirModalProducto = abrirModalProducto
window.verProducto = verProducto
window.searchProducts = searchProducts
