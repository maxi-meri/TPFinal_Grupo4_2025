let entrada = prompt("Ingresar un nombre");


while (entrada != "ESC") {
    switch (entrada) {
        case "Martin":
            alert("Hola Martin");
            break;
        case "Juan":
            alert("Hola Juan");
            break;
        default:
            alert("¿Quien es?");
            break;
    }
    entrada = prompt("Ingresar un nombre");
}