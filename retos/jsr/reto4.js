document.getElementById('formDatos').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const peso = parseFloat(document.getElementById('peso').value);
    if (peso <= 0) {
        alert("Ingrese un peso válido.");
        return;
    }
    const altura = parseFloat(document.getElementById('altura').value);
    const edad = parseInt(document.getElementById('edad').value);
    if (edad <= 0) {
        alert("Ingrese una edad válida.");
        return;
    }
    const genero = document.getElementById('genero').value;
    const actividad = document.getElementById('actividad').value;

    const imc = peso / (altura * altura);
    let clasificacionIMC = '';

    if (imc < 18.5) {
        clasificacionIMC = 'Bajo Peso';
    } else if (imc < 24.9) {
        clasificacionIMC = 'Peso Normal';
    } else if (imc < 29.9) {
        clasificacionIMC = 'Sobrepeso';
    } else {
        clasificacionIMC = 'Obesidad';
    }

    const factorActividad = {
        sedentario: 1.2,
        moderado: 1.55,
        activo: 1.9
    };

    const gastoEnergeticoDiario = factorActividad[actividad] * peso;

    const estadoNutricional = (imc >= 18.5 && imc <= 24.9) ? 'Adecuado' : 'Necesita Atención Especializada';

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Resultados para ${nombre}</h2>
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Clasificación:</strong> ${clasificacionIMC}</p>
        <p><strong>Gasto Energético Diario:</strong> ${gastoEnergeticoDiario.toFixed(2)} kcal</p>
        <p><strong>Estado Nutricional:</strong> ${estadoNutricional}</p>
    `;
});
