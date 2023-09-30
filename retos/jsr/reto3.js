function calcularPropina() {
  const monto = parseFloat(document.getElementById('monto').value);
  const porcentaje = parseInt(document.getElementById('porcentaje').value);


  if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto válido.");
      return;
  }


const propina = monto * (porcentaje / 100);
const totalPagar = monto + propina;
const resultadoElement = document.getElementById('resultado');

resultadoElement.innerHTML = `Propina: $${propina} CLP <br>`;
resultadoElement.innerHTML += `Total a pagar: $${totalPagar} CLP`;
}
