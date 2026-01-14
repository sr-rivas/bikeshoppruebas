/*
 * accesorios
 * Maneja la funcionalidad de la página de accesorios
 */

console.log("[v0] jsaccesorios/jsaccesorios.js cargado")

// Base de datos de accesorios
const accesorios = [
  // ========== SEGURIDAD (5 productos) ==========
  {
    id: "acc1",
    nombre: "Casco Profesional MTB",
    categoria: "seguridad",
    tipo: "Cascos",
    imagen: "img accesorios/castoMTB.png", // Removido "/" inicial
    precio: 89.99,
    stock: true,
    descripcion:
      "Casco de seguridad con tecnología MIPS y ventilación avanzada. Protección certificada para ciclismo de montaña.",
    colores: ["Negro", "Rojo", "Azul"],
    tallas: ["S", "M", "L", "XL"],
  },
  {
    id: "acc2",
    nombre: "Luces LED Delantera y Trasera",
    categoria: "seguridad",
    tipo: "Luces",
    imagen: "img accesorios/leddelanteraytrasera.jpg", // Removido "/" inicial
    precio: 34.99,
    stock: true,
    descripcion:
      "Set de luces recargables USB con múltiples modos de iluminación. 800 lúmenes delantera, visibilidad hasta 300 metros.",
    colores: ["Negro"],
    tallas: [],
  },
  {
    id: "acc3",
    nombre: "Chaleco Reflectante Alta Visibilidad",
    categoria: "seguridad",
    tipo: "Elementos reflectantes",
    imagen: "img accesorios/chaqueta.png", // Removido "/" inicial
    precio: 24.99,
    stock: true,
    descripcion: "Chaleco alta visibilidad con tiras reflectantes 360°. Material transpirable y ajustable.",
    colores: ["Amarillo Neón", "Naranja"],
    tallas: ["S", "M", "L", "XL"],
  },
  {
    id: "acc4",
    nombre: "Candado U-Lock Premium",
    categoria: "seguridad",
    tipo: "Candados",
    imagen: "img accesorios/candadopremiun.webp", // Removido "/" inicial
    precio: 45.99,
    stock: true,
    descripcion: "Candado de alta seguridad nivel 10/10 con llave y soporte de montaje. Acero endurecido anti-corte.",
    colores: ["Negro"],
    tallas: [],
  },
  {
    id: "acc5",
    nombre: "Espejo Retrovisor Ajustable",
    categoria: "seguridad",
    tipo: "Espejos",
    imagen: "img accesorios/espejoretrovisor.webp", // Removido "/" inicial
    precio: 19.99,
    stock: true,
    descripcion: "Espejo retrovisor convexo con montaje en manillar. Visión amplia de 360° y ajuste multidireccional.",
    colores: ["Negro"],
    tallas: [],
  },

  // ========== MANTENIMIENTO (4 productos) ==========
  {
    id: "acc6",
    nombre: "Multiherramienta 15 Funciones",
    categoria: "mantenimiento",
    tipo: "Multiherramientas",
    imagen: "img accesorios/multiherramienta.jpg", // Removido "/" inicial
    precio: 29.99,
    stock: true,
    descripcion:
      "Herramienta compacta con llaves Allen, destornilladores, extractor de cadena y más. Incluye estuche de transporte.",
    colores: ["Negro", "Rojo"],
    tallas: [],
  },
  {
    id: "acc7",
    nombre: "Bomba de Piso con Manómetro Digital",
    categoria: "mantenimiento",
    tipo: "Bombas y CO2",
    imagen: "img accesorios/bomba.jpg", // Removido "/" inicial
    precio: 39.99,
    stock: true,
    descripcion:
      "Bomba de alta presión hasta 160 PSI compatible con válvulas Presta y Schrader. Manómetro digital preciso.",
    colores: ["Negro", "Plateado"],
    tallas: [],
  },
  {
    id: "acc8",
    nombre: "Kit de Limpieza Profesional",
    categoria: "mantenimiento",
    tipo: "Limpieza",
    imagen: "img accesorios/kitdelimpieza.jpg", // Removido "/" inicial
    precio: 35.99,
    stock: true,
    descripcion: "Set completo con cepillos especializados, desengrasante, limpiador de cadena y paños de microfibra.",
    colores: [],
    tallas: [],
  },
  {
    id: "acc9",
    nombre: "Lubricante para Cadena Todo Clima",
    categoria: "mantenimiento",
    tipo: "Lubricantes",
    imagen: "img accesorios/lubricante.webp", // Removido "/" inicial
    precio: 16.99,
    stock: true,
    descripcion: "Lubricante sintético de larga duración resistente al agua y suciedad. Fórmula biodegradable 120ml.",
    colores: [],
    tallas: [],
  },

  // ========== COMODIDAD (4 productos) ==========
  {
    id: "acc10",
    nombre: "Guantes Acolchados Profesionales",
    categoria: "comodidad",
    tipo: "Guantes",
    imagen: "img accesorios/guantescomodos.jpg", // Removido "/" inicial
    precio: 27.99,
    stock: true,
    descripcion:
      "Guantes con gel de absorción de impactos en palma y dedos táctiles para pantalla. Material transpirable.",
    colores: ["Negro", "Gris", "Azul"],
    tallas: ["S", "M", "L", "XL"],
  },
  {
    id: "acc11",
    nombre: "Gafas Deportivas Fotocromáticas",
    categoria: "comodidad",
    tipo: "Gafas",
    imagen: "img accesorios/gafas.jpg", // Removido "/" inicial
    precio: 54.99,
    stock: true,
    descripcion:
      "Lentes que se adaptan automáticamente a la luz con protección UV400. Incluye estuche rígido y paño de limpieza.",
    colores: ["Negro", "Azul"],
    tallas: [],
  },
  {
    id: "acc12",
    nombre: "Sillín Ergonómico con Gel",
    categoria: "comodidad",
    tipo: "Sillines",
    imagen: "img accesorios/sillin.jpg", // Removido "/" inicial
    precio: 49.99,
    stock: true,
    descripcion:
      "Sillín con canal central de alivio de presión y amortiguación de gel de doble densidad. Cubierta impermeable.",
    colores: ["Negro"],
    tallas: [],
  },
  {
    id: "acc13",
    nombre: "Mochila Hidratación 2L",
    categoria: "comodidad",
    tipo: "Mochilas",
    imagen: "img accesorios/mochila.jpg", // Removido "/" inicial
    precio: 59.99,
    stock: true,
    descripcion:
      "Mochila con sistema de hidratación de 2 litros, compartimientos para herramientas y diseño aerodinámico.",
    colores: ["Negro", "Azul", "Rojo"],
    tallas: [],
  },
]

console.log("[v0] Total de accesorios cargados:", accesorios.length)

// Variables globales
let categoriaActual = "todos"
let accesoriosFiltrados = [...accesorios]

// Importar Bootstrap
const bootstrap = window.bootstrap

// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM cargado, inicializando accesorios")

  // Cargar contador del carrito
  actualizarContadorCarrito()

  // Renderizar todos los accesorios inicialmente
  renderizarAccesorios()

  // Configurar event listeners
  configurarEventListeners()

  console.log("[v0] Inicialización completa")
})

// ===================================
// EVENT LISTENERS
// ===================================
function configurarEventListeners() {
  // Botones de categoría
  const categoryButtons = document.querySelectorAll(".btn-category")
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Actualizar botón activo
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filtrar por categoría
      categoriaActual = this.dataset.category
      filtrarAccesorios()
    })
  })

  // Buscador
  const searchInput = document.getElementById("searchAccesorios")
  searchInput.addEventListener("input", () => {
    filtrarAccesorios()
  })
}

// ===================================
// FILTRADO Y BÚSQUEDA
// ===================================
function filtrarAccesorios() {
  const searchTerm = document.getElementById("searchAccesorios").value.toLowerCase()

  accesoriosFiltrados = accesorios.filter((accesorio) => {
    // Filtro de categoría
    const matchCategoria = categoriaActual === "todos" || accesorio.categoria === categoriaActual

    // Filtro de búsqueda
    const matchBusqueda =
      accesorio.nombre.toLowerCase().includes(searchTerm) ||
      accesorio.descripcion.toLowerCase().includes(searchTerm) ||
      accesorio.tipo.toLowerCase().includes(searchTerm)

    return matchCategoria && matchBusqueda
  })

  // Actualizar descripción de categoría
  actualizarDescripcionCategoria()

  // Renderizar resultados
  renderizarAccesorios()
}

// Actualizar descripción de la categoría seleccionada
function actualizarDescripcionCategoria() {
  const descripcionElement = document.getElementById("categoryDescription")
  const descripciones = {
    todos: "Explora nuestra amplia selección de accesorios para todas tus necesidades ciclistas.",
    seguridad:
      "Protege tu vida con equipos de seguridad certificados. Incluye cascos, luces, elementos reflectantes, candados y más para mantenerte seguro en cada recorrido.",
    mantenimiento:
      "Mantén tu bicicleta en perfectas condiciones. Herramientas, bombas, lubricantes, productos de limpieza y todo lo necesario para reparaciones en ruta o en casa.",
    comodidad:
      "Mejora tu experiencia de conducción con accesorios de confort. Guantes, gafas, sillines ergonómicos, mochilas y más para recorridos placenteros.",
  }

  descripcionElement.innerHTML = `<p class="mb-0">${descripciones[categoriaActual]}</p>`
}

// ===================================
// RENDERIZADO DE PRODUCTOS
// ===================================
function renderizarAccesorios() {
  console.log("[v0] Renderizando accesorios. Total a mostrar:", accesoriosFiltrados.length)

  const grid = document.getElementById("accesoriosGrid")
  const noResults = document.getElementById("noResults")

  if (!grid) {
    console.error("[v0] ERROR: No se encontró el elemento accesoriosGrid")
    return
  }

  // Limpiar grid
  grid.innerHTML = ""

  // Verificar si hay resultados
  if (accesoriosFiltrados.length === 0) {
    noResults.style.display = "block"
    return
  }

  noResults.style.display = "none"

  // Crear tarjetas
  accesoriosFiltrados.forEach((accesorio) => {
    const card = crearTarjetaAccesorio(accesorio)
    grid.appendChild(card)
  })

  console.log("[v0] Productos renderizados exitosamente")
}

// Crear tarjeta HTML para un accesorio
function crearTarjetaAccesorio(accesorio) {
  const col = document.createElement("div")
  col.className = "col-md-6 col-lg-3"

  const stockClass = accesorio.stock ? "stock-available" : "stock-unavailable"
  const stockText = accesorio.stock ? "En Stock" : "Sin Stock"
  const stockIcon = accesorio.stock ? "check-circle-fill" : "x-circle-fill"

  col.innerHTML = `
    <div class="product-card h-100">
      <div class="position-relative" style="cursor: pointer;" onclick="abrirModalAccesorio('${accesorio.id}')">
        <img src="${accesorio.imagen}" class="card-img-top" alt="${accesorio.nombre}">
        <span class="product-badge">${accesorio.tipo}</span>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="product-title">${accesorio.nombre}</h5>
        <p class="product-info flex-grow-1">${accesorio.descripcion}</p>
        <div class="product-divider"></div>
        <div class="product-footer">
          <div>
            <div class="product-price">$${accesorio.precio.toFixed(2)}</div>
            <div class="product-stock ${stockClass}">
              <i class="bi bi-${stockIcon}"></i>
              ${stockText}
            </div>
          </div>
          <button class="btn-add-cart" onclick="agregarAccesorioAlCarrito('${accesorio.id}')" ${!accesorio.stock ? "disabled" : ""}>
            <i class="bi bi-cart-plus"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  `

  return col
}

// ===================================
// MODAL DE PRODUCTO
// ===================================
function abrirModalAccesorio(id) {
  const accesorio = accesorios.find((a) => a.id === id)
  if (!accesorio) return

  // Actualizar contenido del modal
  document.getElementById("modalTitle").textContent = accesorio.nombre
  document.getElementById("modalImage").src = accesorio.imagen
  document.getElementById("modalDescription").textContent = accesorio.descripcion

  // Detalles del producto
  let detailsHtml = `
    <p><strong>Categoría:</strong> ${accesorio.tipo}</p>
    <p><strong>Precio:</strong> $${accesorio.precio.toFixed(2)}</p>
    <p><strong>Disponibilidad:</strong> <span class="${accesorio.stock ? "text-success" : "text-danger"}">${accesorio.stock ? "En Stock" : "Sin Stock"}</span></p>
  `

  // Agregar colores si existen
  if (accesorio.colores && accesorio.colores.length > 0) {
    detailsHtml += `
      <div class="mb-3">
        <strong>Colores disponibles:</strong>
        <div class="d-flex gap-2 mt-2">
          ${accesorio.colores.map((color) => `<span class="badge bg-secondary">${color}</span>`).join("")}
        </div>
      </div>
    `
  }

  // Agregar tallas si existen
  if (accesorio.tallas && accesorio.tallas.length > 0) {
    detailsHtml += `
      <div class="mb-3">
        <strong>Tallas disponibles:</strong>
        <div class="d-flex gap-2 mt-2">
          ${accesorio.tallas.map((talla) => `<span class="badge bg-primary">${talla}</span>`).join("")}
        </div>
      </div>
    `
  }

  document.getElementById("modalDetails").innerHTML = detailsHtml

  // Mostrar modal usando Bootstrap
  const modalElement = document.getElementById("productModal")
  const modal = new bootstrap.Modal(modalElement)
  modal.show()
}

// ===================================
// CARRITO DE COMPRAS
// ===================================
function agregarAccesorioAlCarrito(id) {
  const accesorio = accesorios.find((a) => a.id === id)
  if (!accesorio || !accesorio.stock) return

  // Obtener carrito actual
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verificar si el producto ya está en el carrito
  const existingItem = cart.find((item) => item.id === id && item.tipo === "accesorio")

  if (existingItem) {
    existingItem.cantidad++
  } else {
    // Agregar nuevo producto
    cart.push({
      id: accesorio.id,
      tipo: "accesorio",
      nombre: accesorio.nombre,
      precio: accesorio.precio,
      imagen: accesorio.imagen,
      cantidad: 1,
      colores: accesorio.colores,
      tallas: accesorio.tallas,
    })
  }

  // Guardar carrito
  localStorage.setItem("cart", JSON.stringify(cart))

  // Actualizar contador
  actualizarContadorCarrito()

  // Mostrar mensaje de éxito
  mostrarNotificacion(`${accesorio.nombre} agregado al carrito`)
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0)

  const cartCount = document.getElementById("cart-count")
  if (cartCount) {
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "inline" : "none"
  }
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
  // Crear notificación temporal
  const notif = document.createElement("div")
  notif.className = "alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3"
  notif.style.zIndex = "9999"
  notif.innerHTML = `
    <i class="bi bi-check-circle-fill me-2"></i>${mensaje}
  `

  document.body.appendChild(notif)

  // Remover después de 3 segundos
  setTimeout(() => {
    notif.remove()
  }, 3000)
}
