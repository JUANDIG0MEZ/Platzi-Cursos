"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Juan Diego Gomez";
console.log(nombre.length);
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("El objeto es de tipo ".concat(tipo, " y su longitud es ").concat(longitud));
    return longitud;
}
console.log(obtenerLongitud("Hola Mundo"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
console.log(obtenerLongitud(100));
