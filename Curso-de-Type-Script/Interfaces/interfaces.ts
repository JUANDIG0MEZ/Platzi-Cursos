interface Persona { 
    nombre: string,
    edad: number,
    esDesarrollador: boolean
}


let persona: Persona = {
    nombre: "Juan",
    edad: 20,
    esDesarrollador: true
}

console.log("Persona", persona)


let personas2: Persona[] = [
    { nombre: "Juan", edad: 20, esDesarrollador: true },
    { nombre: "Diego", edad: 23, esDesarrollador: false },
    { nombre: "Gomez", edad: 40, esDesarrollador: true }
]

console.log(personas2)


interface Sumar {
    (a: number, b: number): number
}


let sumar2: Sumar = (a: number, b: number): number => {
    return a + b
}

console.log("Resultado de sumar: ", sumar2(5, 3))