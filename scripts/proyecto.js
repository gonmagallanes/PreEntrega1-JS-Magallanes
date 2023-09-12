alert("Bienvenido al cajero rapido de supermercado GON")



const NOMBRE_USUARIO = prompt("Bienvenido, mi nombre es Gonzalo, ¿Usted como se llama?")
const NUMERO_SOCIO_USUARIO = parseInt(prompt("me dice porfavor su numero de socio de Supermercados GON")) 
let total = 0
const MAXIMO = 10

function obtenerNumeroSocio (nombre, numero){
    const SOCIO = nombre + ", socio n°: " + numero
    return SOCIO
}
function despedirse (aQuienDespido) {
    alert("Adios " + aQuienDespido)
}
const DATOS = obtenerNumeroSocio (NOMBRE_USUARIO, NUMERO_SOCIO_USUARIO)

for (let compras = 1; compras <= MAXIMO; compras++ ) {
    
    
    let lista = prompt(
        " En supermercados GON usted tiene para llevarse: tomate, pollo, pescado, fideos, chocolate, agua, cerveza, hamburguesa, lechuga, milanesa, ravioles y jugo, en caso de no querer llevar nada mas diga: Fin")

    switch (lista.trim().toUpperCase()) {
        case "TOMATE" :
            total = total + 1000
            break;
        case "POLLO" :
            total = total + 2000
            break;
        case "PESCADO" :
            total = total + 2300
            break;
        case "FIDEOS" :
            total = total + 400
            break;
        case "CHOCOLATE" :
            total = total + 1000
            break;
        case "AGUA" :
            total = total + 700
            break;
        case "CERVEZA" :
            total = total + 1200
            break;
        case "HAMBURGUESA" :
            total = total + 1500
            break;
        case "LECHUGA" :
            total = total + 200
            break;
        case "MILANESA" :
            total = total + 500
            break;
        case "RAVIOLES" :
            total = total + 2000
            break;
        case "JUGO" :
            total = total + 100
            break;
        default:
            alert("Eso que pidio no esta en la lista")
            break
        
    }

    
    if (lista.toUpperCase().trim() == "FIN") {
         break;
    }
    
    

}

const METODO_PAGO = prompt("Con que le gustaria abonar su pago")

if (METODO_PAGO.trim().toUpperCase() == "DEBITO"){
    alert("Su total es de: " + total)
}else if (METODO_PAGO.trim().toUpperCase() == "CREDITO"){
    total= total + (total * 0.05)
    alert("Con credito tiene un interes del 5%, asi que su total es de: " + total)
}else if (METODO_PAGO.trim().toUpperCase() == "EFECTIVO"){
    total= total - (total * 0.10)
    alert("Pagando con efectivo tiene un descuetno del 10%, asi que su total es de:  " + total)
}else{
    alert("No comprendo lo que me decis")
}


despedirse (DATOS)











