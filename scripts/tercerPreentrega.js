
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LOG-IN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const NOMBRE_USUARIO = localStorage.getItem("usuario")
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

if(NOMBRE_USUARIO == null) {
  agregarForm.addEventListener("submit", agregarItems);
  
}else{
  texth2.innerText = `¡Bienvenido ${NOMBRE_USUARIO}!` 
  
}

function agregarItems(e) {
  e.preventDefault();

  if (agregarInput.value != "") {
      
    texth2.innerText = `¡Bienvenido ${agregarInput.value}!`  
    localStorage.setItem("usuario", agregarInput.value)

  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CARRITO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const tomate = document.querySelector("#tomate")
const pollo = document.querySelector("#pollo")
const pescado = document.querySelector("#pescado")
const fideo = document.querySelector("#fideo")
const agua = document.querySelector("#agua")
const listado = document.querySelector("#listado")

tomate.addEventListener("click", eliminarTomate)

const listItems = document.querySelectorAll('#listado li');
const toRemove = ['tomates'];

function eliminarTomate() {
    Array.from(listItems).forEach(listItem => {
        if (toRemove.includes(listItem.textContent.toLowerCase())) {
          listItem.parentNode.removeChild(listItem);
        }
      });
      
}

pollo.addEventListener("click", eliminarPollo)

const listItems2 = document.querySelectorAll('#listado li');
const toRemove2 = ['pollo'];

function eliminarPollo() {
    Array.from(listItems2).forEach(listItem2 => {
        if (toRemove2.includes(listItem2.textContent.toLowerCase())) {
          listItem2.parentNode.removeChild(listItem2);
        }
      });
      
}

pescado.addEventListener("click", eliminarPescado)

const listItems3 = document.querySelectorAll('#listado li');
const toRemove3 = ['pescado'];

function eliminarPescado() {
    Array.from(listItems3).forEach(listItem3 => {
        if (toRemove3.includes(listItem3.textContent.toLowerCase())) {
          listItem3.parentNode.removeChild(listItem3);
        }
      });
      
}

fideo.addEventListener("click", eliminarFideo)

const listItems4 = document.querySelectorAll('#listado li');
const toRemove4 = ['fideos'];

function eliminarFideo() {
    Array.from(listItems4).forEach(listItem4 => {
        if (toRemove4.includes(listItem4.textContent.toLowerCase())) {
          listItem4.parentNode.removeChild(listItem4);
        }
      });
      
}

agua.addEventListener("click", eliminarAgua)

const listItems5 = document.querySelectorAll('#listado li');
const toRemove5 = ['agua'];

function eliminarAgua() {
    Array.from(listItems5).forEach(listItem5 => {
        if (toRemove5.includes(listItem5.textContent.toLowerCase())) {
          listItem5.parentNode.removeChild(listItem5);
        }
      });
      
}
