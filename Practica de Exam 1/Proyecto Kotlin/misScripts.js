let estudiantes = [];
let notas = [];


fetch('estudiantes.json')
    .then(res => res.json())
    .then(data => {
        estudiantes = data;
    });


function registrarNota(nombre) {
    let nota;
    while (true) {
        let entrada = prompt(`¿Cuál es la nota de ${nombre}? (0 a 100)`);
        nota = parseInt(entrada);
        if (nota >= 0 && nota <= 100) {
            break;
        }
        alert("Por favor, ingresa un número válido entre 0 y 100.");
    }
    return nota;
}


function registrarNotas() {
    notas = [];
    for (let x = 0; x < estudiantes.length; x++) {
        let nombre = estudiantes[x].nombre;
        let nota = registrarNota(nombre);
        let clasificacion = "";

        if (nota >= 90 && nota <= 100) {
            clasificacion = "Excelente";
        } else if (nota >= 80 && nota <= 89) {
            clasificacion = "Buena";
        } else if (nota >= 70 && nota <= 79) {
            clasificacion = "Aprobada";
        } else {
            clasificacion = "Reprobada";
        }

        notas.push({
            nombre: nombre,
            nota: nota,
            clasificacion: clasificacion
        });

        
        let div = document.getElementById(`nombre${x+1}`);
        if (div) {
            div.textContent = `${nombre} - Nota: ${nota} - Clasificación: ${clasificacion}`;
        }
    }
    
    for (let j = estudiantes.length + 1; j <= 10; j++) {
        let div = document.getElementById(`nombre${j}`);
        if (div) div.textContent = "";
    }
}


function generarResumen() {
    if (notas.length === 0) {
        alert("Primero debes registrar las notas.");
        return;
    }
    let aprobados = notas.filter(est => est.nota >= 70).length;
    let reprobados = notas.filter(est => est.nota < 70).length;
    let suma = notas.reduce((acc, est) => acc + est.nota, 0);
    let promedio = (suma / notas.length).toFixed(2);
    let notasSolo = notas.map(est => est.nota);
    let max = Math.max(...notasSolo);
    let min = Math.min(...notasSolo);

    let resumenDiv = document.getElementById('nombre10');
    resumenDiv.innerHTML = `
        <h3>Resumen General</h3>
        <p>Aprobados: ${aprobados}</p>
        <p>Reprobados: ${reprobados}</p>
        <p>Promedio general: ${promedio}</p>
        <p>Nota más alta: ${max}</p>
        <p>Nota más baja: ${min}</p>
    `;
}
