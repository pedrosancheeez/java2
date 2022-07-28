users = JSON.parse(localStorage.getItem("userName"))
pswrd = localStorage.getItem("adminPasw")
adminMenu = document.getElementById("adminMenu")

function register (){
    
    //en userName estaria una base de datos con sql o algun document read q todavia no se como se usa en JS
    
            registerUser = prompt("Ingrese el usuario a registrar")
            if (users.includes(registerUser)){
                alert("ERROR USUARIO YA REGISTRADO")
            }else{
                users.push(registerUser)
                alert("Usuario registrado con exito")
                console.log(users)
            }
            avanzar()
        }
function costos(){
    ddt = parseInt(prompt("Ingrese el costo del dia de trabajo"))
    dtg = parseInt(prompt("Ingrese el costo del dia de trabajo en gabinete"))
}
adminMenu.style.display = "none"
administrar = document.getElementById("btnAdmin")    
administrar.addEventListener("click",admin)
function admin (){
        pasw = document.getElementById("adminPsw").value
    if (pasw == pswrd){
        loginData = document.getElementById("loginData")
        loginData.style = "color: blue;"
        loginData.innerHTML = "<p>Iniciando sesion</p>"
        adminMenu.style.display = "block"
        desaparecerAdmin = document.getElementById("desaparecerAdmin")
        desaparecerAdmin.style.display = "none"
        //
        registrar = document.getElementById("registrar")
        costoTrabajo = document.getElementById("costoTrabajo")
        registrar.addEventListener("click", register)
        costoTrabajo.addEventListener("click", costos)
    }
    else{
        loginData = document.getElementById("loginData")
        loginData.style = "color : red;"
        loginData.innerHTML = "<p>Contraseña incorrecta</p>"
    }
}
    
    
