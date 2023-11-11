//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOG-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const usernameLS = localStorage.getItem("nombre de usuario");
const passwordLS = localStorage.getItem("contraseña");
const formLogIn = document.querySelector("#form-login");
const usernameLogIn = document.querySelector("#usernameLogIn");
const passwordLogIn = document.querySelector("#passwordLogIn");
const registro = document.querySelector("#registrarse")



registro.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "./signin.html";
})


formLogIn.addEventListener("submit", function(e){
    e.preventDefault;
    if (usernameLogIn.value !== usernameLS && passwordLogIn.value !== passwordLS){
        alert("sacala chupaverga")
    }else{
        window.location.href = "../index.html";
        alert("ay")
    }
})

