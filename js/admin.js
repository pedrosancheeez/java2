users = JSON.parse(localStorage.getItem("userName"))
pswrd = localStorage.getItem("adminPasw")
let ddt = localStorage.getItem("ddt")
let dtg = localStorage.getItem("dtg")
adminMenu = document.getElementById("adminMenu")
containerAdmin = document.getElementById("containerAdmin")
preciosTrabajo = document.getElementById("preciosTrabajo")
function registrar (){
    registerDatos = document.getElementById("registerDatos")
    register = document.getElementById("register")
    containerAdmin.style.display = "block"
    adminMenu.style.display = "none"
    register.style.display = "block"
    registerBtn = document.getElementById("registerBtn")
    registerBtn.addEventListener("click" , registrando)
        function registrando (){
            registerPsw = document.getElementById("registerPsw").value
            newUser = document.getElementById("newUser").value           
            if (users.includes(newUser)){
                registerDatos.style = "color: red;"
                registerDatos.innerHTML = "<p>ERROR, Usuario YA REGISTRADO</p>"
            }else{
                users.push(newUser)
                registerDatos.style = "color: blue;"
                registerDatos.innerHTML = "<p>Usuario registrado con EXITO</p>"
                console.log(users)
            }
        }
}
function costos(){
    adminMenu.style.display = "none"
    preciosTrabajo.style.display = "block"
    
    modificarCosto = document.getElementById("modificarCosto")
    modificarCosto.addEventListener("click", cambiarCostos)
        function cambiarCostos(){
            tipoCosto = parseInt(document.getElementById("tipoCosto").value)
            costoNuevo = parseInt(document.getElementById("costoNuevo").value)
            tipoCosto == 1 ? localStorage.setItem("ddt", parseInt(costoNuevo)) : localStorage.setItem("dtg", parseInt(costoNuevo))
        }
}
containerAdmin.style.display = "none"
preciosTrabajo.style.display = "none"
adminMenu.style.display = "none"
register.style.display = "none"
administrar = document.getElementById("btnAdmin")    
administrar.addEventListener("click",admin)
function admin (){
        pasw = document.getElementById("adminPsw").value
    if (pasw == pswrd){
        loginData = document.getElementById("loginData")
        loginData.style = "color: blue;"
        loginData.innerHTML = "<p>Iniciando sesion</p>"
        containerAdmin.style.display = "block"
        adminMenu.style.display = "block"
        desaparecerAdmin = document.getElementById("desaparecerAdmin")
        desaparecerAdmin.style.display = "none"
        //
        registrarUser = document.getElementById("registrarUser")
        costoTrabajo = document.getElementById("costoTrabajo")
        registrarUser.addEventListener("click", registrar)
        costoTrabajo.addEventListener("click", costos)
    }
    else{
        loginData = document.getElementById("loginData")
        loginData.style = "color : red;"
        loginData.innerHTML = "<p>Contraseña incorrecta</p>"
    }
}
    
    
