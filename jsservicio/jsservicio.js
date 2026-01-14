/**
 * servicios.js
 * Maneja la funcionalidad de la página de servicios y reservas
 */

// No usamos import en archivos HTML tradicionales
const bootstrap = window.bootstrap

// Declaración de la función actualizarContadorCarrito
function actualizarContadorCarrito() {
  // Implementación de la función aquí
  console.log("Contador de carrito actualizado")
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Cargar contador del carrito si la función existe
  if (typeof actualizarContadorCarrito === "function") {
    actualizarContadorCarrito()
  }

  // Configurar event listeners para botones de reserva
  configurarBotonesReserva()

  // Configurar formularios de reserva
  configurarFormulariosReserva()

  configurarBotonScrollTop()

  // Validar fecha (no permitir fechas pasadas)
  const dateInputs = document.querySelectorAll('input[type="date"]')
  const hoy = new Date().toISOString().split("T")[0]
  dateInputs.forEach((input) => {
    input.min = hoy
  })
})

/**
 * Configurar event listeners para botones de reserva
 */
function configurarBotonesReserva() {
  const botonesReservar = document.querySelectorAll(".btn-reservar")

  botonesReservar.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      e.preventDefault()

      // Cerrar todos los formularios abiertos primero
      document.querySelectorAll(".reserva-form").forEach((form) => {
        if (form.style.display === "block") {
          form.style.display = "none"
          const card = form.closest(".product-card")
          const btn = card.querySelector(".btn-reservar")
          btn.innerHTML = "Reservar"
          btn.classList.remove("btn-secondary")
          btn.classList.add("btn-primary")
        }
      })

      // Obtener el contenedor de la tarjeta
      const card = this.closest(".product-card")
      const formContainer = card.querySelector(".reserva-form")

      // Mostrar formulario
      formContainer.style.display = "block"
      this.innerHTML = "Ocultar"
      this.classList.remove("btn-primary")
      this.classList.add("btn-secondary")

      // Scroll suave al formulario
      setTimeout(() => {
        formContainer.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }, 100)
    })
  })
}

/**
 * Configurar formularios de reserva
 */
function configurarFormulariosReserva() {
  const formularios = document.querySelectorAll(".form-reserva")

  formularios.forEach((form) => {
    // Botón de cancelar
    const btnCancelar = form.querySelector(".btn-cancelar")
    if (btnCancelar) {
      btnCancelar.addEventListener("click", function (e) {
        e.preventDefault()
        // Ocultar formulario
        const formContainer = this.closest(".reserva-form")
        formContainer.style.display = "none"

        // Resetear formulario
        form.reset()

        // Restablecer botón de reservar
        const card = this.closest(".product-card")
        const btnReservar = card.querySelector(".btn-reservar")
        btnReservar.innerHTML = "Reservar"
        btnReservar.classList.remove("btn-secondary")
        btnReservar.classList.add("btn-primary")
      })
    }

    // Submit del formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener datos del formulario
      const formData = new FormData(form)
      const servicio = formData.get("servicio")
      const precio = formData.get("precio")
      const nombre = form.querySelector('input[type="text"]').value
      const email = form.querySelector('input[type="email"]').value
      const telefono = form.querySelector('input[type="tel"]').value
      const fecha = form.querySelector('input[type="date"]').value
      const hora = form.querySelector('input[type="time"]').value
      const nota = form.querySelector("textarea") ? form.querySelector("textarea").value : ""

      // Validar campos requeridos
      if (!nombre || !email || !telefono || !fecha || !hora) {
        alert("Por favor completa todos los campos obligatorios")
        return
      }

      // Crear objeto de reserva
      const reserva = {
        id: Date.now().toString(),
        servicio: servicio,
        precio: precio,
        nombre: nombre,
        email: email,
        telefono: telefono,
        fecha: fecha,
        hora: hora,
        nota: nota,
        fechaReserva: new Date().toISOString(),
        estado: "pendiente",
      }

      // Guardar en localStorage (simulación de backend)
      guardarReserva(reserva)

      // Mostrar modal de confirmación
      mostrarConfirmacionReserva(reserva)

      // Resetear y ocultar formulario
      form.reset()
      const formContainer = form.closest(".reserva-form")
      formContainer.style.display = "none"

      // Restablecer botón de reservar
      const card = form.closest(".product-card")
      const btnReservar = card.querySelector(".btn-reservar")
      btnReservar.innerHTML = "Reservar"
      btnReservar.classList.remove("btn-secondary")
      btnReservar.classList.add("btn-primary")
    })
  })
}

/**
 * Guardar reserva en localStorage
 */
function guardarReserva(reserva) {
  // Obtener reservas existentes
  const reservas = JSON.parse(localStorage.getItem("reservas")) || []

  // Agregar nueva reserva
  reservas.push(reserva)

  // Guardar en localStorage
  localStorage.setItem("reservas", JSON.stringify(reservas))
}

/**
 * Mostrar modal de confirmación de reserva
 */
function mostrarConfirmacionReserva(reserva) {
  // Formatear fecha
  const fechaFormateada = new Date(reserva.fecha).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Construir resumen de reserva
  const resumenHTML = `
        <div class="text-start">
            <p class="mb-2"><strong>Servicio:</strong> ${reserva.servicio}</p>
            <p class="mb-2"><strong>Precio:</strong> $${reserva.precio}</p>
            <p class="mb-2"><strong>Nombre:</strong> ${reserva.nombre}</p>
            <p class="mb-2"><strong>Fecha:</strong> ${fechaFormateada}</p>
            <p class="mb-2"><strong>Hora:</strong> ${reserva.hora}</p>
            ${reserva.nota ? `<p class="mb-2"><strong>Nota:</strong> ${reserva.nota}</p>` : ""}
        </div>
    `

  // Actualizar contenido del modal
  const resumenElement = document.getElementById("resumenReserva")
  if (resumenElement) {
    resumenElement.innerHTML = resumenHTML
  }

  // Mostrar modal
  const modalElement = document.getElementById("confirmacionModal")
  if (modalElement && bootstrap) {
    const modal = new bootstrap.Modal(modalElement)
    modal.show()
  }
}

/**
 * Configurar botón de scroll to top
 */
function configurarBotonScrollTop() {
  const scrollBtn = document.getElementById("scrollToTop")
  if (!scrollBtn) return

  // Mostrar/ocultar botón según scroll
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("visible")
    } else {
      scrollBtn.classList.remove("visible")
    }
  })

  // Scroll to top al hacer clic
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}
