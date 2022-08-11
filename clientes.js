clientesBtn = document.getElementById("listaClientes");
adminMenu = document.getElementById("adminMenu")
clientesBtn.addEventListener("click", cargarJson)
clientes = document.getElementById("clientes")
clientes.style.display = "none"

function cargarJson (){
    adminMenu.style.display = "none"
    clientes.style.display = "block"
    fetch("/clientes.json")
    .then(function(res){
        return res.json();
    })
    .then(function(cliente){
        let html = "";
        cliente.forEach(function(cliente){
            html += `
            <li>${cliente.nombre} // ${cliente.negocio}</li>
            `
        })
        clientes.innerHTML = html
    })
}