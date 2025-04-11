function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Buenos dias, ".concat(nombre);
    }
}
var saludo = saludar("Juan", "Hola!");
var saludo2 = saludar("Diego");
console.log(saludo);
console.log(saludo2);
// Parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
}
console.log("La suma de todos los numeros es: ".concat(sumarTodos(1, 2, 34, 5, 5)));
// valores por defecto
function despedir(nombre, saludo) {
    if (saludo === void 0) { saludo = "Adios"; }
    return "".concat(saludo, ", ").concat(nombre);
}
var despedida = despedir("Juan");
console.log("Despedida: ", despedida);
console.log("Despedida: ", despedir("Diego", "Hasta luego"));
