document.getElementById("formDatos1").addEventListener("submit", function(event) {
    event.preventDefault();

    var longitud = document.getElementById("Longitud").value;
    var incluirMayusculas = document.getElementById("mayúsculas").checked;
    var incluirMinusculas = document.getElementById("minúsculas").checked;
    var incluirNumeros = document.getElementById("números").checked;
    var incluirEspeciales = document.getElementById("caracteres").checked;

    var caracteres = "";
    if (incluirMayusculas) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (incluirMinusculas) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (incluirNumeros) {
        caracteres += "0123456789";
    }
    if (incluirEspeciales) {
        caracteres += "!@#$%^&*()_+";
    }

    var contraseña = generarContraseña(longitud, caracteres);
    
    var resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = "<strong>Contraseña generada:</strong> <strong>" + contraseña + "</strong>";
});

function generarContraseña(longitud, caracteres) {
    var contraseña = "";
    for (var i = 0; i < longitud; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indice);
    }
    return contraseña;
}
