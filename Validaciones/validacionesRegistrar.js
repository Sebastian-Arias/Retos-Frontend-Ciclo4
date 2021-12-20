
const expresiones = {                    //Expresiones regulares Para algunas validaciones
	//identificacion: 
    usuario: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function validateIdentificacion_(){
    inputText = document.getElementById("identification").value
    console.log("inputText", inputText.length )
    
    if (inputText.length > 5 && inputText.length < 15) {
        // alert("Ok: valid identification ");
        //document.querySelector("useremail").focus();           
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: identificación inválida, el campo debe tener más de 5 y menos de 15 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateName_(){
    inputText = document.getElementById("name").value
    console.log("inputText", inputText.length )
    
    if (inputText.length > 1 && inputText.length <= 80) {
        // alert("Ok: valid name ");
        //document.querySelector("useremail").focus();           
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: nombre inválido, el campo debe tener más de 1 caracter y menos de 80 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateBirthtDay_(){
    inputText = document.getElementById("monthBirthtDay").value
    console.log("inputText", inputText)
    var numeroMonthB = parseInt(inputText);
    if (numeroMonthB <= 12){
        validarMonthB_();
    }else{
        alert("Tiene que ser un numero mayor a 12 intente de nuevo");
        return false;
    }
}

function validarMonthB_(){
    var monthBirthtDayFormat = /^\d{0,2}$/;
    if (inputText.match(monthBirthtDayFormat)) {
        // alert("Ok: valid monthBirthtDay ");
        //document.querySelector("useremail").focus();   
        //console.log("AAAAAAAAAA") 
        console.log(typeof(inputText));  
        //var numeroMonthB = parseInt(inputText);
        //console.log(typeof(numeroMonthB));  //El mes de cumpleaños deberia ser numerico :c
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: El mes de cumpleaños debe tener entre 1 o 2 cifras no puede contener letras");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateAddress_(){
    inputText = document.getElementById("address").value
    console.log("inputText", inputText.length )
    
    if (inputText.length > 5 && inputText.length <= 30) {
        // alert("Ok: valid address ");
        //document.querySelector("useremail").focus();           
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: dirección inválida, el campo debe tener más de 5 y menos de 30 caracteres");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validateCellPhone_(){
    inputText = document.getElementById("cellphone").value
    console.log("inputText", inputText)
    //
    var telefono = /^\d{7,14}$/;
    //
    if (inputText.match(telefono)) {
        // alert("Ok: valid cellphone ");
        //document.querySelector("useremail").focus();           
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: teléfono celular inválido, el campo debe tener más de 7 y menos de 14 numeros No debe tener letras");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function ValidateEmail_() {
    inputText = document.getElementById("email").value
    console.log("inputText", inputText)
    var mailformat = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
    if (inputText.match(mailformat)) {
        // alert("Ok: The email entered has the correct format (name@domain.domain)");
        //document.querySelector("useremail").focus();           
        
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: Solo aceptamos las siguientes direcciones @(yahoo|hotmail|gmail|correo)");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function validatePassword_(){
    inputText = document.getElementById("password").value
    console.log("inputText", inputText)
    var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    if (inputText.match(mailformat)) {
        // alert("Ok: password valid");
        //document.querySelector("useremail").focus();            
        return true;
    }
    else {
        console.log(inputText)
        alert("Atención: Para mayor seguridad las contraseña debe incluir mayúscula, minúscula, dígitos y símbolos.");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function verificarPasswords() {
    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('password');
    pass2 = document.getElementById('passConfir');

    // Si las constraseñas son IGUALES  
    if (pass1.value === pass2.value) {

        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.add("mostrar");

        return true;
        // Si p1 es diferente a p2 OOO p2 es diferente a p1 
    } else (pass1.value != pass2.value || pass2.value != pass1.value)
    // Si las constraseñas no coinciden mostramos un mensaje 
    document.getElementById("error").classList.add("mostrar");
    document.getElementById("ok").classList.remove("mostrar");
    return false;
}

/*
function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
        return false;
    } else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        /* Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
        */
       
        /* Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);
        

        return true;
    }
 
}*/

function validateLogin(){
    if(ValidateEmail_() && validateIdentificacion_() && validateName_() && validateAddress_() &&  validateCellPhone_() &&   validatePassword_()){
        alert("Usuario Creado ya puede ingresar al sistema");
        return true;
    }
    return false;
}


