/**
 * Recibe el campo y convierte su contenido a mayuscula
 * @param {*} campo nombre del campo
 
 function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}*/

/**
 * Ingresar.html
 * @param {*} dato 
 * @returns 
 */
function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Ingresar.html
 * valida el correo electrónico: tomado de
 * https://www.w3resource.com/javascript/form/email-validation.php
 */
 function ValidateEmail(valor) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return valor.match(mailformat);
}