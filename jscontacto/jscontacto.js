/**
 * contacto.js
 * Maneja la funcionalidad del formulario de contacto
 */

// Declarar la función actualizarContadorCarrito
function actualizarContadorCarrito() {
  // Lógica para actualizar el contador del carrito
  console.log("Contador del carrito actualizado")
}

// Importar bootstrap (simulado para el ejemplo)
const bootstrap = {
  Modal: function (modalElement) {
    this.modalElement = modalElement
    this.show = function () {
      this.modalElement.style.display = "block"
    }
  },
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Cargar contador del carrito
  actualizarContadorCarrito()

  // Configurar formulario de contacto
  configurarFormularioContacto()
})

/**
 * Configurar el formulario de contacto
 */
function configurarFormularioContacto() {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const asunto = document.getElementById("asunto").value
    const mensaje = document.getElementById("mensaje").value

    // Validar campos
    if (!nombre || !email || !asunto || !mensaje) {
      alert("Por favor completa todos los campos obligatorios")
      return
    }

    // Validar formato de email
    if (!validarEmail(email)) {
      alert("Por favor ingresa un correo electrónico válido")
      return
    }

    // Crear objeto de mensaje
    const mensajeContacto = {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
      fecha: new Date().toISOString(),
    }

    // Guardar en localStorage (simulación de envío)
    guardarMensaje(mensajeContacto)

    // Mostrar modal de éxito
    const modal = new bootstrap.Modal(document.getElementById("successModal"))
    modal.show()

    // Resetear formulario
    form.reset()
  })
}

/**
 * Validar formato de email
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/**
 * Guardar mensaje en localStorage
 */
function guardarMensaje(mensaje) {
  // Obtener mensajes existentes
  const mensajes = JSON.parse(localStorage.getItem("mensajesContacto")) || []

  // Agregar nuevo mensaje
  mensajes.push(mensaje)

  // Guardar en localStorage
  localStorage.setItem("mensajesContacto", JSON.stringify(mensajes))
}
