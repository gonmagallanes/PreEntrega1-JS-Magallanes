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

