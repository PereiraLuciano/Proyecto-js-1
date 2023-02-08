alert ("Bienvenido!");
const usuarioAutorizado = "Coderhouse";
const contraseniaAutorizada = "1234";

let usuario = prompt("A continuación ingrese su usuario")

for (let i = 0; i < 2; i++){
    let contrasenia = prompt("Por favor, ingrese su contraseña");
    if (contrasenia === contraseniaAutorizada){
        alert ("Contraseña correcta, prosiga")
        break;
    } else {
        contrasenia = prompt("Contraseña incorrecta, le quedan 3 intentos")
    }
}

alert("Bienvenido a su cuenta " + usuario);

let cantidadMeses = parseInt(prompt("Ingrese su plan (segun los meses que desee)"));

let cotizacion = calcularCotizacion(cantidadMeses);

alert("El precio final es de " + cotizacion);
    


//Funciones

function calcularCotizacion(meses) {
    if (meses < 6){
        return "$20.000 por mes"
    } else if (meses === 6) {
        return "$16.000 por mes"
    } else {
        return "$14.000 por mes"
    }
}