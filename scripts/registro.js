//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SIGN-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const usernameSignIn = document.querySelector("#usernameSignIn");
const nameSignIn = document.querySelector("#nombreSignIn");
const surnameSignIn = document.querySelector("#apellidoSignIn");
const passwordSignIn = document.querySelector("#passwordSignIn");
const formSignIn = document.querySelector("#IDform-SignIn");
const signinHeader = document.querySelector("#signinHeader")


formSignIn.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    usernameSignIn.value == "" ||
    nameSignIn.value == "" ||
    surnameSignIn.value == "" ||
    passwordSignIn.value == ""
  ) {
    signinHeader.innerHTML = `<h1>SuperMercados GON - Registrarse </h1>
    <a style="color: #fefae0; font-size: 1.5rem;" href="../index.html">Ir al Inicio</a> <h3 class="main-header" style: color:  style="color: red; font-size: 1.5rem; margin-bottom: 0px   " >Faltan datos</h3>`
  } else {
    localStorage.setItem("nombre de usuario", usernameSignIn.value);
    localStorage.setItem("nombre", nameSignIn.value);
    localStorage.setItem("apellido", surnameSignIn.value);
    localStorage.setItem("contraseña", passwordSignIn.value);
    window.location.href = "./login.html";
  }
});
