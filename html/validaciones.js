function validar_nombreUsuario(String){

    var nombreUsuario = document.getElementById("in_usuario").value;

    if (nombreUsuario.length > 3 && nombreUsuario.length < 10 && /\w/.test(nombreUsuario)) {
        return true
        
    }
    else  return false        
}

function validar_contrasena(String){

    var contrasena = document.getElementById("in_contrasena").value;

    if (contrasena.length > 5 && /\w/.test(contrasena)) {
        return true
    }
    else  return false
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
