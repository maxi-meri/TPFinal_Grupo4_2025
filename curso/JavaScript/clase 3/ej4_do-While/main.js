/*--------------- Estructura del bucle DO WHILE ---------------*/

/*

El bucle "do while" es similar al bucle "while", pero con una diferencia clave:  
En el "do while", el bloque de código se ejecuta **al menos una vez**, incluso si la condición es falsa desde el principio.  
La condición se evalúa **después** de ejecutar el código, lo que garantiza que el código se ejecute al menos una vez.

Sintaxis:

do {
    // Código a ejecutar al menos una vez
} while (condición);

*/

let numero;

do {
    numero = prompt("Ingresa un número mayor a 10:");
} while (numero <= 10);

alert("Número válido ingresado:", numero);

