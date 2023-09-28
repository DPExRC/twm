let oracion = prompt("Ingresa una oración:");
let palabras = oracion.split(' ').filter(Boolean).length;

document.write(`Oración ingresada: "${oracion}"<br>`);
document.write(`Número de palabras: ${palabras}`);
