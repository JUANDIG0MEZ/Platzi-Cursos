let nombres: string[] = ["Juan", "Diego", "Gomez"]

console.log("nombres", nombres)

let edades: number[] = [20, 23, 40]
console.log("edades", edades)

let mixto: any[] = ["Juan", 20, true]
console.log("mixto", mixto)


interface Persona { 
    nombre: string,
    edad: number,
    esDesarrollador: boolean
}

let personas: Persona[] = [
    { nombre: "Juan", edad: 20, esDesarrollador: true },
    { nombre: "Diego", edad: 23, esDesarrollador: false },
    { nombre: "Gomez", edad: 40, esDesarrollador: true }
]
personas.push({ nombre: "Pedro", edad: 30, esDesarrollador: false})
console.log("personas", personas) 

// Tuplas

let personaTupla: [string, number, boolean];

personaTupla = ["Juan", 20, true]
personaTupla = ["Diego", 23, false]
console.log("Persona" , personaTupla)



let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Juan", 20, true])
personasTupla.push(["Diego", 23, false])
personasTupla.push(["Gomez", 54, true])
console.log("Personas Tupla", personasTupla)

personasTupla.forEach( persona => {
    console.log("Persona: ", persona)
    let nombre: string = persona[0]
    let edad: number = persona[1]
    let esDesarrollador: boolean = persona[2]

    console.log("Nombre: ", nombre)
    console.log("Edad: ", edad)
    console.log("Es desarrollador: ", esDesarrollador)

})


// Enumeradores

enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles, 
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Lunes
console.log("Dia: ", dia)
console.log("Dia [id]: ", DiaDeLaSemana[dia])