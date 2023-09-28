function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
      return false;
    }
  
    let Mayuscula = /[A-Z]/.test(contrasena);
    let Numero = /[0-9]/.test(contrasena);
    let Especial = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contrasena);
  
    return Mayuscula && Numero && Especial;
  }
  
  let contrasenaIngresada = prompt("Ingresa una contraseña:");
  
  if (validarContrasena(contrasenaIngresada)) {
    document.write("La contraseña es válida.");
  } else {
    document.write("La contraseña no cumple con los requisitos de seguridad.");
  }
  