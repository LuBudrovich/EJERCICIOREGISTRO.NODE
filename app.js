const readlineSync = require("readline-sync");
const { MostrarlistaEstudiantes } = require("./Registroo")
const Registrodeestudiantes = () => {
    console.log("Iniciando registro de estudiantes");
    let CantidadAlumnos = readlineSync.question(" Ingresar la cantidad de estudiantes: ");
    console.log("cantidad de alumnos: " + CantidadAlumnos)
    const estudiantes = []


    for (let i = 0; i < CantidadAlumnos; i++) {

        let Nombre = readlineSync.question(" Ingresar Nombre de estudiante: ");

        let Edad = readlineSync.question(" Ingresar la edad del estudiante: ");

        const Estudiante = {
            Nombre,
            Edad
        };

        estudiantes.push(Estudiante);

    }

    MostrarlistaEstudiantes(estudiantes)
}



Registrodeestudiantes();