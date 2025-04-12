export {}

let nombre: string = "Juan Diego Gomez";
console.log(nombre.length);


function obtenerLongitud<T extends {length: number}>(obj: T): number {
    let longitud: number = obj.length;
    let tipo: string = typeof obj;
    console.log(`El objeto es de tipo ${tipo} y su longitud es ${longitud}`);
    return longitud;
}

console.log(obtenerLongitud("Hola Mundo"));
console.log(obtenerLongitud([1,2,3,4,5]));

console.log(obtenerLongitud(100))