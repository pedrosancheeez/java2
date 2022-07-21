
let contador = 0
let ddt = 8000
let dtg = 7500
let tasaFija = 1200
//LO IDEAL EN EL USERNAME seria usar alguna base de datos tipo sql o algun documentread
let userName = ["pedro", "juan", "roberto"]
let adminPasw = "44475567"

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

        decision = confirm("Desea volver a digitar una opcion? ")
    if(decision){
        avanzar()
    }
    }   
    

function register (nombre){
    
    //en userName estaria una base de datos con sql o algun document read q todavia no se como se usa en JS
    
            registerUser = prompt("Ingrese el usuario a registrar")
            if (userName.includes(registerUser)){
                alert("ERROR USUARIO YA REGISTRADO")
            }else{
                userName.push(registerUser)
                alert("Usuario registrado con exito")
            }
            avanzar()
        }
    
    
    
function admin (){
    do{
    pasw = prompt("Ingrese su contraseña de administrador")
    if (pasw == adminPasw){
    alert("Bienvenido al menu de administrador")
    adminOpt = prompt("Que accion desea hacer 1- modificar los precios de honorarios 2- crear un nuevo usuario")
    if (adminOpt == 1){
        ddt = parseInt(prompt("Ingrese el costo del dia de trabajo"))
        dtg = parseInt(prompt("Ingrese el costo del dia de trabajo en gabinete"))
        intentar = false
        contador = 4
    }
    if (adminOpt == 2){
        register(nombre)
        intentar = false
        contador = 4
    }
    }else{
        alert("CONTRASEÑA INCORRECTA")
        intentar = confirm("Desea volver a intentar?")        
        if (intentar){
        intentos = 2 - contador
        alert(`Tienes solo ${intentos} intentos`)
        contador = contador + 1
        }else{
            alert("Cerrando el programa")
        }
    }
}while(intentar && contador < 3)
    decision = confirm("Desea volver a digitar una opcion? ")
    if(decision){
        avanzar()
    }
}
menuOpciones = document.getElementById("menuOpciones")
menuOpciones.style.display="none"
const botonLogin = document.getElementById("buttonLogin")
botonLogin.addEventListener("click", obtenerDatos)

function obtenerDatos (){
    decision = document.getElementById("decision")
    nombre = document.getElementById("nombre").value
    if (userName.includes(nombre)){
            decision.style= "color: blue;"
            decision.innerHTML = "<p>Iniciando sesión</p>"
            setTimeout(avanzar(), 1000);
        }
        else{
            decision.style = "color: red;"
            decision.innerHTML = "<p>Usuario incorrecto o no registrado</p>"
            setTimeout(() => {
                registrar =  confirm("Desea crear un nuevo usuario?")
                if(registrar){
                    admin()
                }
            }, 1000);
            
            
        }
}


function avanzar(){
    //do {
        console.log("SSS")
        menuOpciones.style.display = "block"
        desaparecerLogin = document.getElementById("desaparecer")
        desaparecerLogin.style.display = "none"
}

//alert (`Muchas gracias ${nombre} por usar nuestro programa. Hasta luego`)