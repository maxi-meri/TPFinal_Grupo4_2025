/*--------------- Sentencia BREAK ---------------*/

/*

La sentencia "break" se utiliza para interrumpir la ejecución de un bucle cuando cierta condicion se cumple.

*/

for (let i=1; i <= 10 ; i++){
    if(i==5){
        break;
    }
    alert (i);
}

/*--------------- Sentencia CONTINUE ---------------*/

/*

La sentencia "Continue" se utiliza para queel ciclo saltee cierta repeticion.

*/

for (let i=1; i <= 10 ; i++){
    if(i==5){
        continue;
    }
    alert (i);
}