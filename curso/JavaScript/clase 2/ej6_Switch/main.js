/*---------------Estructura del condicional SWITCH------------*/

/*

switch (expresion) {
    case valor1:
        // Código a ejecutar si expresion es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si expresion es igual a valor2
        break;
    case valor3:
        // Código a ejecutar si expresion es igual a valor3
        break;
    default:
        // Código a ejecutar si ninguno de los casos anteriores se cumple
}


- case: Define un posible valor para la expresión evaluada. Si la expresión coincide con el valor de un case, se ejecuta el código dentro de ese bloque.
- break: Detiene la ejecución del switch después de ejecutar un case, evitando que se ejecuten los siguientes casos.
- default: Se ejecuta si ninguno de los case anteriores coincide con el valor de la expresión.
*/


let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Es el inicio de la semana.");
        break;
    case "martes":
        console.log("Es martes, seguimos adelante.");
        break;
    case "miércoles":
        console.log("Mitad de la semana.");
        break;
    case "jueves":
        console.log("Casi viernes.");
        break;
    case "viernes":
        console.log("¡Es viernes, fin de semana cerca!");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana, a descansar.");
        break;
    default:
        console.log("Día no válido.");
}