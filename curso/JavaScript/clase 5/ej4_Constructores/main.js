//Los constructores son funciones que se utilizan para crear múltiples objetos con la misma estructura
/*

function producto(parametro1, parametro2){
    this.propiedad1 = parametro1,
    this.propiedad2 = parametro2
}

*/

//this es la herramienta que usamos para declarar las propiedades que van a tener los objetos que luego crearemos





function producto (titulo, color, precio){
    this.titulo = titulo,
    this.color = color,
    this.precio = precio
}

const producto1 = new producto("sillon", "rojo", 50000);
const producto2 = new producto("cama", "blanco", 100000);

