var nombres = ["Juan", "Diego", "Gomez"];
console.log("nombres", nombres);
var edades = [20, 23, 40];
console.log("edades", edades);
var mixto = ["Juan", 20, true];
console.log("mixto", mixto);
var personas = [
    { nombre: "Juan", edad: 20, esDesarrollador: true },
    { nombre: "Diego", edad: 23, esDesarrollador: false },
    { nombre: "Gomez", edad: 40, esDesarrollador: true }
];
personas.push({ nombre: "Pedro", edad: 30, esDesarrollador: false });
console.log("personas", personas);
// Tuplas
var personaTupla;
personaTupla = ["Juan", 20, true];
personaTupla = ["Diego", 23, false];
console.log("Persona", personaTupla);
var personasTupla = [];
personasTupla.push(["Juan", 20, true]);
personasTupla.push(["Diego", 23, false]);
personasTupla.push(["Gomez", 54, true]);
console.log("Personas Tupla", personasTupla);
personasTupla.forEach(function (persona) {
    console.log("Persona: ", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es desarrollador: ", esDesarrollador);
});
// Enumeradores
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Lunes;
console.log("Dia: ", dia);
console.log("Dia [id]: ", DiaDeLaSemana[dia]);
