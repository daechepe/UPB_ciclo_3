let registros = []//

function validar_captcha(rcaptcha){//

    let respuesta = false

    if (rcaptcha == 5){
        respuesta = true
    }
return respuesta
}


function iniciar_sesion(usuario, contrasena, rcaptcha){//
    
    let validacion = false
    let validacaptcha = validar_captcha(rcaptcha);//

    let filtrado = registros.find(elemento=>elemento.usuario == usuario)
    console.log(filtrado)

    if (typeof filtrado != "undefined" && filtrado.usuario == usuario && filtrado.contrasena == contrasena && validacaptcha == true){
        validacion = true
    }
    return validacion
    
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;