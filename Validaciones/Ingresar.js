//Definiciones globales al script
const errores = document.getElementsByClassName("err");
const mensaje = document.getElementById("mensaje");

/**
 * Este evento de JQuery se ejecuta cuando se termina de cargar la libreria
 */
$(document).ready(function () {
    estadoInicial();

    //Evento clic del botón, ejecuta una petición al ws de autenticación si el usuario ingreso información
    $("#autenticate").click(function () {
        if (validar()) {
            autenticate();
        }
    });

    //Eventos clic sobre los campos para ocultar los mensajes de error
    $("#email").click(function () {
        errores[0].style.display = "none";
    });

    $("#pwd").click(function () {
        errores[1].style.display = "none";
    });
});

/**
 * Estado inicial de la pagina
 */
 function estadoInicial() {
    $("#alerta").hide();
    errores[0].style.display = "none";
    errores[1].style.display = "none";
    $("#email").focus();
}

/**
 * Valida el correcto diligenciamiento de los campos del formulario
 * @returns true si pasa las validaciones del formulario, false en caso contrario
 */
 function validar() {

    //obtiene valores
    let inputEmail = $("#email").val();
    let inputPassword = $("#pwd").val();

    //valida que los campos no sean vacios
    if (validaesVacio(inputEmail)) {
        errores[0].style.display = "block";
        $("#email").focus();
        return false;

    } else if (!ValidateEmail(inputEmail)) {
        errores[0].style.display = "block";
        $("#email").focus();
        return false;
    } else if (validaesVacio(inputPassword)) {
        errores[1].style.display = "block";
        $("#pwd").focus();
        return false;
    }

    return true;
}

/**
 * Procesa peticiòn de tipo GET para validar si la combinación email/contraseña corresponde a un usuario de la aplicación
 */
 function autenticate() {
    let inputEmail = $("#email").val();
    let inputPassword = $("#pwd").val();

    $.ajax({
        url: `http://168.138.128.169:8080/api/user/${inputEmail}/${inputPassword}`,
        type: 'GET',
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            console.table(respuesta);
            //recibe la respuesta a la petición, y valida si el usuario puede se valido correctamente en la aplicación
            gestionaResultado(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#alerta").show();
            $("#mensaje").html("Ocurrio un problema al ejecutar la petición..." + status);
        }
    });
}

/**
 * Valida si el usuario se autentico correctamente en la aplicaciòn o no:
 * 
 * Si el id del usuario es null no fue posible la autenticacion, en caso contrario
 * obtiene informacion del usuario, crea objeto javascript, lo convierte a json y lo guarda en el 
 * sessionStorage para que esta informacion este accesible desde el menu de opciones
 * @param {*} respuesta el resultado de la peticion al ws de autenticacion
 */
 function gestionaResultado(respuesta) {

    if (respuesta.id == null) {
        $("#alerta").show();
        $("#mensaje").html("Usuario no registrado, por favor valide credenciales de acceso...");
        $("#email").focus();
    } else {
        //crea objeto javascript que contiene la información del usuario
        let userJS = {
            id: respuesta.id,
            identification: respuesta.identification,
            name: respuesta.name,
            birthtDay: respuesta.birthtDay,
            monthBirthtDay: respuesta.monthBirthtDay,
            address: respuesta.address,
            cellPhone: respuesta.cellPhone,
            email: respuesta.email,
            password: respuesta.password,
            zone: respuesta.zone,
            type: respuesta.type
        };

        //transforma el objeto javascript a json antes de guardarlo en el sessionStorage
        let user = JSON.stringify(userJS);

        //almacena el usuario en el sessionStorage, para hacerlo disponible a las otras páginas
        sessionStorage.setItem("user", user);

        $("#alerta").show();
        $("#mensaje").html("Bienvenido(a) " + userJS.name);
        $("#email").focus();
        
        validarperfil(respuesta.type);
        
        //location.href = "MenuInicio.html";


    }
}

function validarperfil(perfil) {
    switch (perfil) {
        case 'ADM':
            console.log('Perfil Admin');
            window.location.href = "perfilAdmin.html";
            break;
        case 'COORD':
            console.log('Perfil Coordinador');
            window.location.href = "RegistroProductos.html";
            break;
        case 'ASE':
            console.log('Perfil Asesor');
            window.location.href = "ordenes.html";
            break;
    }
}