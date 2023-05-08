
function validateEmail() {
  let email = document.getElementById("email");
  let error = document.getElementById("email-error");

  if (!email.checkValidity()) {
    error.innerHTML = "Por favor, introduce un correo electrónico válido";
  } else {
    error.innerHTML = "";
  }
}
