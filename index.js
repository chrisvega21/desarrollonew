function ingresar(){
    var usu = document.getElementById("usu").value;
    var con = document.getElementById("contra").value;
    
    if (usu === ""){
        alert("Por favor, ingresa tu usuario");
    } else if (con === ""){
        alert("Por favor, ingresa tu contraseña");
    } else if (usu === "Christopher") {
        if (con === "gato123"){
            window.open("home.html");
        } else {
            alert("Contraseña errada");
        }
    } else {
        alert("Usuario errado");
    }
}
