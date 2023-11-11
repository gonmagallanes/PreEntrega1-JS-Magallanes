

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOG-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const usernameLS = localStorage.getItem("nombre de usuario");
const passwordLS = localStorage.getItem("contraseña");
const formLogIn = document.querySelector("#form-login");
const usernameLogIn = document.querySelector("#usernameLogIn");
const passwordLogIn = document.querySelector("#passwordLogIn");
const registro = document.querySelector("#registrarse")
const inicioSesionH1 = document.querySelector("#inicioSesionH1")


registro.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "./signin.html";
})


formLogIn.addEventListener("submit", function(e){
    
    if (usernameLogIn.value !== usernameLS && passwordLogIn.value !== passwordLS){
        e.preventDefault();
        window.location.href = "#";
        inicioSesionH1.innerHTML= `<h1  class="main-header">Inicio de sesion</h1> <h3 class="main-header" style: color:  style="color: red; font-size: 1.5rem" >Datos incorrectos</h3>`
    }else{
        e.preventDefault();
        Swal.fire({
            
            html: `Bienvenido/a <b>${usernameLS}</b>, ya puede
              <a href="../index.html">Ir de compras</a>`

        });
        
    }
})


