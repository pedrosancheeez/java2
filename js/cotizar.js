let ddt = parseInt(localStorage.getItem("ddt"))
let dtg = parseInt(localStorage.getItem("dtg"))

console.log(ddt)
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
        console.log("valor colocado Incorrecto o mayor a 40.001m2")
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
    tasaFija = 1200
    //calculo de total de gastos

    totalGastos = tasa1 + tasa2 + aforo + tasaFija
    }

    let cotizacionBtn = document.getElementById("cotizacionBtn")
    cotizacionBtn.addEventListener("click", cotizacion)
    let hoja = document.getElementById("hoja")
    hoja.style.display = "none"
function cotizacion(){
        let nombreCliente = document.getElementById("nombreCliente").value
        let nombreNegocio = document.getElementById("nombreNegocio").value
        let ubicacionNegocio = document.getElementById("ubicacionNegocio").value
        let emailCliente = document.getElementById("emailCliente").value
        let metCuadrados = parseInt(document.getElementById("metrosCuadrados").value)
        let cotizacionTipo = parseInt(document.getElementById("cotizacionTipo").value)
        //VARIABLES PARA GENERAR HOJA

        
        let clienteHoja = document.getElementById("clienteHoja")
        let negocioHoja = document.getElementById("negocioHoja")
        let ubicacionHoja = document.getElementById("ubicacionHoja")
        let emailHoja = document.getElementById("emailHoja")
        let metCuadHoja = document.getElementById("metCuadHoja")

        let tipoHoja = document.getElementById("tipoHoja")
        let honorariosHoja = document.getElementById("honorariosHoja")
        let gastosHoja = document.getElementById("gastosHoja")
        let totalHoja = document.getElementById("totalHoja")
        ////////////////////////////////////////////////////////////////
        
        ////////////////////////////////////////////////////////////////
        calcHonorarios(metCuadrados)
        if (metCuadrados> 40001 || isNaN(metCuadrados)){
            alert("valor colocado Incorrecto o mayor a 40.001m2")
        }else{
            sombra = document.getElementById("sombra")
            loginFondo = document.getElementById("loginFondo")
            form = document.getElementById("prueba")
            sombra.style.backgroundColor = "whitesmoke";
            loginFondo.style.backgroundColor = "whitesmoke";
            form.style.display = "none"
            
            if (cotizacionTipo == 1){
                calcTasas(honorarios)
                tipoHojaDato = "Protocolo 1 - seguridad en proteccion contra incendio"
            }
            else if (cotizacionTipo == 2){
                honorarios = honorarios * 0.3
                calcTasas(honorarios)
                tipoHojaDato = "Protocolo 2 - seguridad en proteccion contra incendio"
            }
            else if (cotizacionTipo == 3 ){
                honorarios = honorarios * 0.4
                calcTasas(honorarios)
                tipoHojaDato = "Protocolo 3 - Manual de emergencias"
            }
            let total = totalGastos + honorarios
            hoja.style.display = "block"
            tipoHoja.innerHTML = `<p>${tipoHojaDato}</p>`
            clienteHoja.innerHTML = `<p>${nombreCliente}</p>`
            negocioHoja.innerHTML = `<p>${nombreNegocio}</p>`
            ubicacionHoja.innerHTML = `<p>${ubicacionNegocio}</p>`
            emailHoja.innerHTML = `<p>${emailCliente}</p>`
            metCuadHoja.innerHTML = `<p>${metCuadrados} m2</p>`
            honorariosHoja.innerHTML = `<p>$${honorarios}</p>`
            gastosHoja.innerHTML = `<p>$${totalGastos}</p>`
            totalHoja.innerHTML = `<p>$${total}</p>`
            
        }
            

        setTimeout(() => {
            decision =  confirm("Desea elegir otra opcion?")
            if(decision){
                avanzarCotizado()
            }
        }, 6000);
    }   
    