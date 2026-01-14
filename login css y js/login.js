const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const forgotForm = document.getElementById("forgotForm");

function showLogin() {
  hideAll();
  loginForm.classList.add("active");
}

function showRegister() {
  hideAll();
  registerForm.classList.add("active");
}

function showForgot() {
  hideAll();
  forgotForm.classList.add("active");
}

function hideAll() {
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
  forgotForm.classList.remove("active");
}

/* LOGIN */
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Login exitoso (simulado)");
});

/* REGISTRO */
registerForm.addEventListener("submit", e => {
  e.preventDefault();
  if (password.value.length < 6) {
    alert("La contraseña debe tener mínimo 6 caracteres");
    return;
  }
  alert("Registro exitoso (simulado)");
  showLogin();
});

/* RECUPERAR */
forgotForm.addEventListener("submit", e => {
  e.preventDefault();
  const temp = Math.random().toString(36).slice(-8);
  alert("Clave temporal enviada\nClave: " + temp);
  showLogin();
});
