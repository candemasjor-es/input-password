const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const boton = document.getElementById("boton");
const usuario = document.getElementById("usuario");

usuario.addEventListener("input", validar);

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length <= 7) {
        feedback.textContent = "La contraseña no es segura";
        feedback.className = "mal";
    } else if (password.length >= 11) {
        feedback.textContent = "La contraseña es segura";
        feedback.className = "bien";
    } else {
        feedback.textContent = "La contraseña es poco segura";
        feedback.className = "poco";
    }
    validar();
});

function validar() {
    // y: && o: ||
    console.log(passwordInput.value.length);
    console.log(usuario.value.length);
    if (passwordInput.value.length >= 11 && usuario.value.length > 0) {
        // habilitamos el boton
        boton.removeAttribute("disabled");
    } else {
        // deshabilitamos el boton
        boton.setAttribute("disabled", "true");
    }
}

function login(evento) {
    evento.preventDefault();
    alert("Login...");
}

boton.addEventListener("click", login);
