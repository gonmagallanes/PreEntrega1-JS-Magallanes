////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BOTONES-SESION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const botonesSesion = document.querySelector("#botonesSesion")

console.log(botonesSesion.innerHTML);

const usernameIndex = localStorage.getItem("nombre de usuario")

console.log(usernameIndex);

if(usernameIndex !== "" && usernameIndex !== null){
  botonesSesion.innerHTML = `<h3>¡Bienvenido/a, ${usernameIndex}!</h3> <input class="botonesCarro2" id="salirDeSesion" type="button" value="Salir de la cuenta"> `
}

const salirDeSesion = document.querySelector("#salirDeSesion")

salirDeSesion.addEventListener("click", function (e){
  e.preventDefault();
  window.location.href= "./pages/signin.html"
})


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH-PRODUCTOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const listaProductos= document.querySelector("#lista-productos")

fetch("./scripts/productos.json")
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data)
})



function mostrarProductos(productos) {
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerText = producto.nombre + " - $" + producto.precio;
    listaProductos.append(li)
  })
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARRITO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const tomateMenos = document.querySelector("#tomateMenos")
const tomateMas = document.querySelector("#tomateMas")

const polloMenos = document.querySelector("#polloMenos")
const polloMas = document.querySelector("#polloMas")

const pescadoMenos = document.querySelector("#pescadoMenos")
const pescadoMas = document.querySelector("#pescadoMas")

const aguaMenos = document.querySelector("#aguaMenos")
const aguaMas = document.querySelector("#aguaMas")

const asadoMenos = document.querySelector("#asadoMenos")
const asadoMas = document.querySelector("#asadoMas")

const fideosMenos = document.querySelector("#fideosMenos")
const fideosMas = document.querySelector("#fideosMas")


const cantidadTomates = document.querySelector("#cantidadTomates")
const cantidadPollo = document.querySelector("#cantidadPollo")
const cantidadPescado = document.querySelector("#cantidadPescado")
const cantidadAgua = document.querySelector("#cantidadAgua")
const cantidadAsado = document.querySelector("#cantidadAsado")
const cantidadFideos = document.querySelector("#cantidadFideos")


tomateMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadTomates.innerText = ""

})
tomateMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadTomates.innerText = "Tomate"

})


polloMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadPollo.innerText = ""

})
polloMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadPollo.innerText = "Pollo"

})


pescadoMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadPescado.innerText = ""

})
pescadoMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadPescado.innerText = "Pescado"

})


aguaMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadAgua.innerText = ""

})
aguaMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadAgua.innerText = "Agua"

})


asadoMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadAsado.innerText = ""

})
asadoMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadAsado.innerText = "Asado"

})


fideosMenos.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadFideos.innerText = ""

})
fideosMas.addEventListener("click" , function(e)  {
  e.preventDefault()
  cantidadFideos.innerText = "Fideos"

})

