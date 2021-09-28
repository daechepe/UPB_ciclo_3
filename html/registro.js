let registros = []

// let arrayusuarios = []   //Solucion 3: Crear dos arrays dentro del array registros, uno para los usuarios y otro para las contraseñas
// let arraycontrasenas = [] //Solucion 3: Crear dos arrays dentro del array registros, uno para los usuarios y otro para las contraseñas

function agregarRegistro(){

    let nombreUsuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;

    // var registro = new Array(nombreUsuario, contrasena) //Solucion 1: crear un array dentro del array registros por cada registro
    // registros.push(registro) //Solucion 1: crear un array dentro del array registros por cada registro

    registros.push({usuario: nombreUsuario, password: contrasena}) //Solucion 2: crear diccionarios (maps) por cada registro

    // arrayusuarios.push(nombreUsuario) //Solucion 3: Crear dos arrays dentro del array registros, uno para los usuarios y otro para las contraseñas
    // arraycontrasenas.push(contrasena) //Solucion 3: Crear dos arrays dentro del array registros, uno para los usuarios y otro para las contraseñas
    // registros = [arrayusuarios, arraycontrasenas] //Solucion 3: Crear dos arrays dentro del array registros, uno para los usuarios y otro para las contraseñas
    
    // registros.push(nombreUsuario, contrasena) //Solucion 4: Agregar los registros uno tras de otro en el array registros, primero el usuario y luego la contraseña.
    // console.log (registros) //console log de pruebas
}


function filtrarPorContrasena(arreglo, filtro){
    
    // let contrasenas = []
    
    // for (let i = 0; i<arreglo.length;i++){
    //     if(i%2!=0){
    //         contrasenas.push(arreglo[i]);
    //     }
    // }
    // let filtrado = contrasenas.filter(constrasena=>constrasena.length <= filtro) //Solucion 4: Como los registros se registran en parejas, las contaseñas tienen índices impares, se extraen en una lista aparte y luego se filtran las que no cumplan con el criterio y se incluyen en un nuevo array.

    let filtrado = arreglo.filter(elemento=>elemento.password.length <= filtro) //Solucion 2: filtrar los diccionarios (maps) con base en la longitud de la contraseña

    console.log(filtrado)
    return filtrado
    
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;