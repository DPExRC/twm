let numero = parseInt(prompt("Ingresa un número entero positivo:"));
let suma = 0;

if (!isNaN(numero) && Number.isInteger(numero) && numero > 0) {
  for (let i = 2; i <= numero; i += 2) {
    suma += i;
  }
  document.write(`La suma de todos los números pares desde 1 hasta ${numero} es: ${suma}`);
} else {
  document.write("El valor ingresado no es un número entero positivo válido.");
}
