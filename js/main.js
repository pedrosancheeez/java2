
let contador = 0
let ddt = 8000
let dtg = 7500
let tasaFija = 1200
//LO IDEAL EN EL USERNAME seria usar alguna base de datos tipo sql o algun documentread
let userName = ["pedro","roberto"]
let adminPasw = "44475567"
localStorage.setItem("adminPasw",adminPasw)
localStorage.setItem("userName",JSON.stringify(userName))
localStorage.setItem("ddt", ddt)
localStorage.setItem("dtg", dtg)
localStorage.setItem("tasaFija", tasaFija)
users = JSON.parse(localStorage.getItem("userName"))
pswrd = localStorage.getItem("adminPasw")
menuOpciones = document.getElementById("menuOpciones")
menuOpciones.style.display="none"
const botonLogin = document.getElementById("buttonLogin")
botonLogin.addEventListener("click", obtenerDatos)

function obtenerDatos (){
    
    decision = document.getElementById("decision")
    nombre = document.getElementById("nombre").value
    if (users.includes(nombre)){
            decision.style= "color: blue;"
            decision.innerHTML = "<p>Iniciando sesión</p>"
            
            setTimeout(() => {avanzar()
            }, 1000);
            
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