let ddt = 8000
let dtg = 7500
let tasaFija = 1200


function calcHonorarios(metCuadrados){
    if (metCuadrados > 0 && metCuadrados <= 100){
        honorarios = (ddt + dtg)*0.8
    }
    else if (metCuadrados >= 101 && metCuadrados <= 350){
        honorarios = ((2 * ddt) + (2 * dtg))*0.8
    }
    else if (metCuadrados >= 351 && metCuadrados <= 500){
        honorarios = (3 * ddt) + (3 * dtg)
    }
    else if (metCuadrados >= 501 && metCuadrados <= 1000){
        honorarios = (3 * ddt) + (4 * dtg)
    }
    else if (metCuadrados >= 1001 && metCuadrados <= 1500){
        honorarios = (3 * ddt) + (5 * dtg)
    }
    else if (metCuadrados >= 1501 && metCuadrados <= 3000){
        honorarios = (3 * ddt) + (6 * dtg)
    }
    else if (metCuadrados >= 3001 && metCuadrados <= 4000){
        honorarios = (4 * ddt) + (7 * dtg)
    }
    else if (metCuadrados >= 4001 && metCuadrados <= 6000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 1.15
    }
    else if (metCuadrados >= 6001 && metCuadrados <= 8000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 1.35
    }
    else if (metCuadrados >= 8001 && metCuadrados <= 10000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 1.55
    }
    else if (metCuadrados >= 10001 && metCuadrados <= 15000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 1.70
    }
    else if (metCuadrados >= 15001 && metCuadrados <= 20000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 1.90
    }
    else if (metCuadrados >= 20001 && metCuadrados <= 25000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 2.1
    }
    else if (metCuadrados >= 25001 && metCuadrados <= 30000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 2.25
    }
    else if (metCuadrados >= 30001 && metCuadrados <= 40000){
        honorarios = ((4 * ddt) + (7 * dtg)) * 2.5
    }
    
    else
        alert("valor colocado Incorrecto o mayor a 40.001m2")
}

function calcTasas(honorarios){
    //Calculo de la primera tasa
    if (honorarios <= 36000){
        tasa1 = 1800
    }
    else if (honorarios > 36000){
        tasa1 = honorarios * 0.05
    }
    //calculo segunda tasa
    tasa2 = honorarios * 0.18
    //calculo tercer tasa 
    aforo = honorarios * 0.012

    //calculo de total de gastos

    totalGastos = tasa1 + tasa2 + aforo + tasaFija
    }

function cotizacion(){
        let metCuadrados = parseInt(prompt("Ingrese la cantidad de metros cuadrados a trabajar"))
        calcHonorarios(metCuadrados)
        alert(`Los metros a trabajar son ${metCuadrados}`)
        alert(`los honorarios seran de ${honorarios}`)
        calcTasas(honorarios)
    
        alert(`los gastos seran de ${totalGastos}`)
        let total = totalGastos + honorarios
        alert(`y el total a pagar sera de ${total}`)
    }
    
function contacto(){
        alert(`Señor/a ${nombre}, nuestro numero de contacto es +54 9 3512632938`)
    }
    
function conocernos(){
        alert(`Señor/a ${nombre}, nos ubicamos en Cordoba, Velez Sarsfield 2300`)
    
    }

alert("Bienvenido a mi programa de habilitacion de higiene y seguridad")
nombre = prompt("Ingrese su nombre")
do {
    opcion = prompt(`Señor/a ${nombre} ingrese 1 - Para cotizar su habilitacion, 2 - Para contactarnos o 3 - para conocer donde estamos`)
    if (opcion == 1){
        cotizacion()
    }
    else if (opcion == 2){
        contacto()
    }
    else if (opcion == 3){
        conocernos()
        
    }
    else{
        alert("OPCION INCORRECTA")
    }
    decision = confirm("Desea volver a digitar una opcion? ")

}while (decision)

alert (`Muchas gracias ${nombre} por usar nuestro programa. Hasta luego`)