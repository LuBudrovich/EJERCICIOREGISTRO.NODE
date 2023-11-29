const MostrarlistaEstudiantes = (estudiantes) => {
    console.log ("MOSTRAR LISTA COMPLETA");
    estudiantes.forEach((Estudiante) => {
        console.log ("Nombre:" + Estudiante.Nombre, ", Edad:" + Estudiante.Edad )
    })
        
    };

    module.exports = {MostrarlistaEstudiantes};