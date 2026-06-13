//Las clases son otra forma de escribir constructores

class Persona {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
    presentarse(){console.log("Hola, soy " + this.nombre + " y tengo " + this.edad);}
}



/*
const persona1 = new Persona("Facu", 21, "Argentina");
console.log(persona1);
persona1.presentarse();
*/