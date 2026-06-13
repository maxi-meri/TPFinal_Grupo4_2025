let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado +" "+ "Apellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}