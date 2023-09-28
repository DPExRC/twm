let numeros = prompt("Ingresa una serie de números separados por comas:");
let numerosArray = numeros.split(',').map(Number);

if (numerosArray.length > 0 && !numerosArray.includes(NaN)) {
  let numeroMasGrande = Math.max(...numerosArray);
  document.write(`Los números ingresados son: ${numerosArray.join(', ')}<br>`);
  document.write(`El número más grande es: ${numeroMasGrande}`);
} else {
  document.write("No se ingresaron números válidos.");
}
