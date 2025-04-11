interface Direccion {
    calle: string,
    numero: number,
    ciudad?: string
}

let direccion: Direccion = {
    calle: "Calle False",
    numero: 123,
    ciudad: "Springfield"
}

let direccion2: Direccion = {
    calle: "Calle Verdadera",
    numero: 456
}

console.log("Direccion", direccion)
console.log("Direccion2", direccion2)


// Read only

interface Persona4 {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean
}

let personaRead: Persona4 = {
    nombre: "Juan",
    edad: 20,
    esDesarrollador: true
}

console.log("Persona3", personaRead)

// personaRead.nombre = "Diego" // Error, no se puede modificar

// Optional
// Interfaz extendida
interface Empleado extends Persona4 {
    readonly puesto: string,
}

let empleado: Empleado = {
    nombre: "Juan",
    edad: 20,
    esDesarrollador: true,
    puesto: "Desarrollador"
}
console.log("Empleado", empleado)