const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
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
  return test(password);
});