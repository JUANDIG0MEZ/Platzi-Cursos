
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    }
    else{
        return `Buenos dias, ${nombre}`;
    }
}


let saludo: string = saludar("Juan", "Hola!")
let saludo2: string = saludar("Diego")
console.log(saludo)
console.log(saludo2)



// Parametros multiples
function sumarTodos(...numeros: number[]): number{
    return numeros.reduce((acumulador, numero)=> acumulador + numero, 0)
}

console.log(`La suma de todos los numeros es: ${sumarTodos(1, 2, 34, 5, 5)}`)


// valores por defecto
function despedir(nombre: string, saludo: string = "Adios"): string {
    return `${saludo}, ${nombre}`;
}

let despedida: string = despedir("Juan")
console.log("Despedida: ", despedida)
console.log("Despedida: ", despedir("Diego", "Hasta luego"))