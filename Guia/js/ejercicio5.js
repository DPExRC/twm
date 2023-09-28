let estatura = parseFloat(prompt("Ingresa tu estatura en metros:"));
let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));

if (!isNaN(estatura) && !isNaN(peso) && estatura > 0 && peso > 0) {
  let imc = peso / (estatura * estatura);
  let categoria;

  if (imc < 18.5) {
    categoria = "Bajo Peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Normal";
  } else {
    categoria = "Sobrepeso";
  }

  document.write(`Tu IMC es: ${imc.toFixed(2)}<br>`);
  document.write(`Estás en la categoría de: ${categoria}`);
} else {
  document.write("Ingresa valores válidos para estatura y peso.");
}
