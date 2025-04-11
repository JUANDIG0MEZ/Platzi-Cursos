var variableAny;
variableAny = "hello";
variableAny = 23;
variableAny = true;
console.log("Valor de la variable: " + variableAny);
var variableUnknown;
variableUnknown = "hello";
// variableUnknown = 23
// variableUnknown = true
if (typeof variableUnknown === "string") {
    console.log("variable unknown is a string: ", variableUnknown);
}
function logMessage(message) {
    console.log(message);
}
logMessage("Esta funcion no devuleve nada : void");
function throwError(message) {
    throw new Error(message);
}
throwError("Error de prueba");
