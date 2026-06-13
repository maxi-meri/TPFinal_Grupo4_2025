/*---------------Estructura del condicional IF - ELSE IF - ELSE------------*/

/*

if (condicion1) {
    // Código a ejecutar si la condición1 es verdadera
} else if (condicion2) {
    // Código a ejecutar si la condición1 es falsa y la condición2 es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}

*/

let alfajor = 1060;

if (alfajor < 200) {
    console.log("El precio del afajor es menor a 200");
} else if (alfajor < 500) {
    console.log("El precio del afajor es menor a 500");
} else if (alfajor < 1000) {
    console.log("El precio del afajor es menor a 1000");
} else {
    console.log("El precio del alfajor supera los mil pesos");
}