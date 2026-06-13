//Los métodos se usan para darle comportamiento a un objeto. Son funciones que están dentro de un objeto y permiten realizar acciones con los datos del mismo.

function persona (nombre, edad, nacionalidad){
    this.nombre = nombre,
    this.edad = edad,
    this.nacionalidad = nacionalidad
}

const persona1 = new persona("Facu", 21, "Argentina")


/*
this.presentarse = function(){console.log("Hola, soy " + this.nombre + " y tengo " + this.edad);}
persona1.presentarse();
*/


/*
this.cumpleanios = function(){this.edad+=1}
persona1.cumpleanios();
console.log(persona1.edad);
*/