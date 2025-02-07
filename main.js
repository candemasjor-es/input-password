const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const boton = document.getElementById("boton");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length <= 7) {
        feedback.textContent = "La contraseña no es segura";
        feedback.className = "mal";
        boton.setAttribute("disabled", "true");
    } else if (password.length >= 11) {
        feedback.textContent = "La contraseña es segura";
        feedback.className = "bien";
        //habilitar boton
        boton.removeAttribute("disabled");
    } else {
        feedback.textContent = "La contraseña es poco segura";
        feedback.className = "poco";
        boton.setAttribute("disabled", "true");
    }
    return test(password);
});

boton.addEventListener("click", () => {
    alert("Login...");
});
