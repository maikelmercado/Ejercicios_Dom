let form = document.getElementById( "form" );
//evento submit
form.addEventListener( "submit", function ( event ) { // event se recive como parametro evento submit viene del boton //FUNCION ANONIMA EVENT COMO OBJETO con todo lo que contiene 
event.preventDefault(); limpiarErrores(); //cancelar el submit  preventDefault refresh de recarga,  

let textNombre = document.querySelector(".textNombre").value;
let textTelefono = document.querySelector(".textTelefono").value;
let textEmail = document.querySelector(".textEmail").value;

let resultado = validar(textNombre,textTelefono,textEmail);
if(resultado == true) 
       { exito();
}; 
});

//FUNCION PARA LIMPIAR  textos ERRORES(Antes de validar )
function limpiarErrores() { document.querySelector(".resultado").innerHTML = ""; 
    document.querySelector(".errorNombre").innerHTML = ""; 
    document.querySelector(".errorTelefono").innerHTML = ""; 
    document.querySelector(".errorEmail").innerHTML = "";
};

//FUNCION EXITO
function exito() {
document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
};



    function validar(nombre,telefono,email) { 
        let pasamosLaValidacion = true;
        let validacionNombre = /[a-zA-Z]/gim;

        if (validacionNombre.test(nombre) == false) {
               document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
               pasamosLaValidacion = false;
               };
        let validacionTelefono = /\d/gim; // d metacaracter como decir de 0 a 9
        if (validacionTelefono.test(telefono) == false) {
               document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números)."
                pasamosLaValidacion = false;
               };
        let validaciónEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim; // [] rango de caracteres  _%+-caracateres aceptados en los correos +puede haber mas de un signo aceptados, antes de la@
        if (validaciónEmail.test(email) == false ) {
               document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido."
               pasamosLaValidacion = false;
               };
              pasamosLaValidacion = true
        };