// ===================================
// PÁGINA DE BICICLETAS - JavaScript
// ===================================

// Variables globales
let categoriaActual = "todas"
let precioActual = "todos"

// Descripciones de categorías
const descripcionesCategorias = {
  todas: {
    titulo: "Todas las Bicicletas",
    descripcion: "Explora nuestra colección completa de bicicletas de alta calidad.",
  },
  montana: {
    titulo: "Bicicletas de Montaña",
    descripcion:
      "Perfectas para terrenos difíciles y aventuras off-road. Diseñadas con suspensión robusta y cuadros resistentes para conquistar cualquier sendero.",
  },
  ruta: {
    titulo: "Bicicletas de Ruta",
    descripcion:
      "Diseñadas para velocidad en carreteras pavimentadas. Ligeras, aerodinámicas y eficientes para largas distancias.",
  },
  urbana: {
    titulo: "Bicicletas Urbanas",
    descripcion: "Ideales para el día a día en la ciudad. Cómodas, prácticas y perfectas para el transporte diario.",
  },
  hibrida: {
    titulo: "Bicicletas Híbridas",
    descripcion:
      "Versatilidad para ciudad y caminos ligeros. Combinan lo mejor de las bicicletas de montaña y de ruta.",
  },
  bmx: {
    titulo: "Bicicletas BMX",
    descripcion:
      "Para acrobacias y estilo libre. Robustas y ágiles, perfectas para trucos y diversión en el skatepark.",
  },
}

// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  // Obtener categoría de la URL si existe
  const urlParams = new URLSearchParams(window.location.search)
  const catParam = urlParams.get("cat")

  if (catParam) {
    categoriaActual = catParam
    // Marcar botón de categoría activo
    document.querySelectorAll(".category-btn").forEach((btn) => {
      if (btn.getAttribute("data-category") === catParam) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })
  }

  // Cargar productos iniciales
  cargarBicicletas()

  // Event listeners para filtros
  inicializarFiltros()

  // Event listeners para búsqueda
  inicializarBusqueda()

  // Event listener para formulario de suscripción
  inicializarSuscripcion()
})

// ===================================
// FILTROS
// ===================================

// Inicializar filtros
function inicializarFiltros() {
  // Filtro de categorías
  const categoryButtons = document.querySelectorAll("#categoryFilter .category-btn")
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      categoriaActual = this.getAttribute("data-category")

      // Verificar si es categoría próximamente
      if (categoriaActual === "electrica" || categoriaActual === "infantil") {
        mostrarProximamente()
      } else {
        ocultarProximamente()
        actualizarDescripcionCategoria()
        cargarBicicletas()
      }
    })
  })

  // Filtro de precios
  const priceButtons = document.querySelectorAll("#priceFilter .category-btn")
  priceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      priceButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      precioActual = this.getAttribute("data-price")
      cargarBicicletas()
    })
  })
}

// Actualizar descripción de categoría
function actualizarDescripcionCategoria() {
  const categoryDescription = document.getElementById("categoryDescription")
  const info = descripcionesCategorias[categoriaActual]

  if (info) {
    categoryDescription.innerHTML = `
            <h6 class="fw-bold mb-2">${info.titulo}</h6>
            <p class="mb-0">${info.descripcion}</p>
        `
  }
}

// Mostrar modal de próximamente
function mostrarProximamente() {
  document.getElementById("comingSoonModal").style.display = "block"
  document.getElementById("categoryDescription").style.display = "none"
  document.getElementById("bikesGrid").style.display = "none"
  document.getElementById("priceFilter").parentElement.style.display = "none"
}

// Ocultar modal de próximamente
function ocultarProximamente() {
  document.getElementById("comingSoonModal").style.display = "none"
  document.getElementById("categoryDescription").style.display = "block"
  document.getElementById("bikesGrid").style.display = "flex"
  document.getElementById("priceFilter").parentElement.style.display = "block"
}

// ===================================
// CARGAR BICICLETAS
// ===================================

// Cargar bicicletas según filtros
function cargarBicicletas() {
  const bikesGrid = document.getElementById("bikesGrid")
  const noResults = document.getElementById("noResults")

  // Filtrar por categoría
  let bicicletasFiltradas = window.bicicletas

  if (categoriaActual !== "todas") {
    bicicletasFiltradas = bicicletasFiltradas.filter((bike) => bike.categoria === categoriaActual)
  }

  // Filtrar por precio
  if (precioActual !== "todos") {
    bicicletasFiltradas = bicicletasFiltradas.filter((bike) => {
      if (precioActual === "bajo") return bike.precio < 500
      if (precioActual === "medio") return bike.precio >= 500 && bike.precio <= 1500
      if (precioActual === "alto") return bike.precio > 1500
      return true
    })
  }

  // Limitar a 12 productos o mezclar categorías si es "todas"
  if (categoriaActual === "todas") {
    // Obtener 12 bicicletas mezcladas de diferentes categorías
    const categorias = ["montana", "ruta", "urbana", "hibrida", "bmx"]
    bicicletasFiltradas = []
    categorias.forEach((cat) => {
      const bikesDeCategoria = window.bicicletas.filter((b) => b.categoria === cat).slice(0, 2)
      bicicletasFiltradas = [...bicicletasFiltradas, ...bikesDeCategoria]
    })
  } else {
    bicicletasFiltradas = bicicletasFiltradas.slice(0, 12)
  }

  // Mostrar resultados
  if (bicicletasFiltradas.length === 0) {
    bikesGrid.innerHTML = ""
    noResults.style.display = "block"
  } else {
    noResults.style.display = "none"
    bikesGrid.innerHTML = bicicletasFiltradas.map((bike) => crearTarjetaBicicleta(bike)).join("")
  }
}

// Crear tarjeta de bicicleta
function crearTarjetaBicicleta(bike) {
  return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card">
                <div class="product-image" onclick="abrirModalProducto(${bike.id})">
                    <img src="${bike.imagen}" alt="${bike.nombre}">
                    <span class="product-badge">${bike.categoria}</span>
                </div>
                <div class="product-body">
                    <h5 class="product-title">${bike.nombre}</h5>
                    <p class="product-info">${bike.marco} • ${bike.engranaje} • ${bike.frenos}</p>
                    <div class="product-divider"></div>
                    <div class="product-footer">
                        <div>
                            <div class="product-price">$${bike.precio.toFixed(2)}</div>
                            <div class="product-stock ${bike.stock ? "stock-available" : "stock-unavailable"}">
                                <i class="bi ${bike.stock ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i>
                                ${bike.stock ? "En Stock" : "Agotado"}
                            </div>
                        </div>
                        <button class="btn-add-cart" onclick="agregarAlCarrito(${bike.id})" ${!bike.stock ? "disabled" : ""}>
                            <i class="bi bi-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

// ===================================
// BÚSQUEDA
// ===================================

// Inicializar búsqueda
function inicializarBusqueda() {
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
    })
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        buscarEnPagina()
      }
    })
  }
}

// Buscar en la página
function buscarEnPagina() {
  const searchInput = document.getElementById("searchInput")
  const query = searchInput.value.toLowerCase().trim()

  if (query.length === 0) {
    cargarBicicletas()
    return
  }

  const bikesGrid = document.getElementById("bikesGrid")
  const noResults = document.getElementById("noResults")

  // Buscar en todas las bicicletas
  const resultados = window.bicicletas.filter(
    (bike) =>
      bike.nombre.toLowerCase().includes(query) ||
      bike.categoria.toLowerCase().includes(query) ||
      bike.descripcion.toLowerCase().includes(query) ||
      bike.marco.toLowerCase().includes(query) ||
      bike.engranaje.toLowerCase().includes(query),
  )

  // Mostrar resultados
  if (resultados.length === 0) {
    bikesGrid.innerHTML = ""
    noResults.style.display = "block"
  } else {
    noResults.style.display = "none"
    bikesGrid.innerHTML = resultados.map((bike) => crearTarjetaBicicleta(bike)).join("")
  }
}

// ===================================
// SUSCRIPCIÓN
// ===================================

// Inicializar formulario de suscripción
function inicializarSuscripcion() {
  const subscriptionForm = document.getElementById("subscriptionForm")

  if (subscriptionForm) {
    subscriptionForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("subscriptionEmail").value

      if (email && validarEmail(email)) {
        // Guardar suscripción (en localStorage por ahora)
        const suscripciones = JSON.parse(localStorage.getItem("suscripciones") || "[]")
        suscripciones.push({
          email: email,
          categoria: categoriaActual,
          fecha: new Date().toISOString(),
        })
        localStorage.setItem("suscripciones", JSON.stringify(suscripciones))

        // Mostrar mensaje de éxito
        alert("¡Gracias por suscribirte! Te notificaremos cuando esta categoría esté disponible.")
        subscriptionForm.reset()
      } else {
        alert("Por favor, ingresa un correo electrónico válido.")
      }
    })
  }
}

// Validar email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
