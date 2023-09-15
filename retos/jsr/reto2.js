var num1, num2, num3;

do {
    num1 = parseFloat(prompt('Ingresa la primera nota:',''));
} while (isNaN(num1));

do {
    num2 = parseFloat(prompt('Ingresa la segunda nota:',''));
} while (isNaN(num2));

do {
    num3 = parseFloat(prompt('Ingresa la tercera nota:',''));
} while (isNaN(num3));

var promedio = ((num1*0.4 + num2*0.3 + num3*0.3) / 3).toFixed(2);
//num1*0.4 + num2*0.3 + num3*0.3?

alert(num1*0.4)
alert(num2*0.3)
alert(num3*0.3)

if (promedio < 3.95) {
    alert('Asignatura reprobada, promedio: ' + promedio);
} else if (promedio >= 3.95 && promedio <= 4.94) {
    alert('Examen, promedio: ' + promedio);
} else {
    alert('Asignatura aprobada, promedio: ' + promedio);
}
