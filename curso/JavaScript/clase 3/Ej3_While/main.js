/*--------------- Estructura del bucle WHILE ---------------*/

/*

El bucle "while" ejecuta un bloque de código mientras se cumpla una condición específica.  
Se usa cuando no se sabe de antemano cuántas veces debe repetirse el ciclo.

Sintaxis:

while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}

*/

let entrada = prompt("Ingresar un dato")

while(entrada !="8"){
    alert("El usuario ingreso " + entrada);
    entrada = prompt("Ingrese otra dato");
}

alert("Felicidades, saliste del bucle")