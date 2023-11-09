//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SIGN-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const usernameSignIn = document.querySelector("#usernameSignIn");
const nameSignIn = document.querySelector("#nombreSignIn");
const surnameSignIn = document.querySelector("#apellidoSignIn");
const passwordSignIn = document.querySelector("#passwordSignIn");
const formSignIn = document.querySelector("#IDform-SignIn");

formSignIn.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    usernameSignIn.value == "" ||
    nameSignIn.value == "" ||
    surnameSignIn.value == "" ||
    passwordSignIn.value == ""
  ) {
    alert("gay");
  } else {
    localStorage.setItem("nombre de usuario", usernameSignIn.value);
    localStorage.setItem("nombre", nameSignIn.value);
    localStorage.setItem("apellido", surnameSignIn.value);
    localStorage.setItem("contraseña", passwordSignIn.value);
    window.location.href = "./login.html";
  }
});
