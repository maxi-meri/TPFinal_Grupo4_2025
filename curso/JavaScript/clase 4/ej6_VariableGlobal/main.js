/*---Si una variable se declara fuera de cualquier funcion o bloque, actualmente se transforma en variable global---*/

let resultado = 0;

function sumar (primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
console.log(resultado);