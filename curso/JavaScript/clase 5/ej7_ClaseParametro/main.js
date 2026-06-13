//Las clases son otra forma de escribir constructores

class Persona {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
    saludar(saludo) {
        console.log(saludo + " soy " + this.nombre + " y tengo " + this.edad);
    }
}


const persona1 = new Persona("Facundo", 21, "Argentina");
persona1.saludar("Buenos dias");