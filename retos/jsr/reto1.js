var num = prompt('Ingresa un número:','');
num = parseFloat(num);

if (num) {
    if (num % 2 == 0) {
        alert('El número ' + num + ' es par.');
    } else {
        alert('El número ' + num + ' es impar.');
    } 
} else {
    alert('Entrada no válida.');
}
