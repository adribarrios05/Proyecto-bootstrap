/***************************************************
 *      funciones de validación del formulario de
 *      validacionForm.js
 * 
 */

function validacion(){
    let correcto = true;
    let nombre = document.getElementById('nombre').value; // getters
    let apellidos = document.getElementById('apellidos').value; 
    let email = document.getElementById('email').value; 
    let pass = document.getElementById('password').value;

    if(nombre == "" || /^\s+$/.test(nombre) || !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,20}$/.test(nombre)){
        document.getElementById('nombreHelp').style.visibility="visible"; //setter
        document.getElementById('nombre').style.borderColor="red"; //setter
        correcto = false;
    } 
    

    if(apellidos == "" || /^\s+$/.test(apellidos) || !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,20}$/.test(apellidos)){
        document.getElementById('apellidosHelp').style.visibility="visible"; 
        document.getElementById('apellidos').style.borderColor="red"; 
        correcto = false;
    } 

    if(email == "" || !/^[ a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
        document.getElementById('apellidosHelp').style.visibility="visible"; 
        document.getElementById('apellidos').style.borderColor="red"; 
        correcto = false;
    } 

    if(pass.length<8 || pass.length>15 || ! /[a-zñ]/.test(pass)){
        document.getElementById('apellidosHelp').style.visibility="visible"; 
        document.getElementById('apellidos').style.borderColor="red"; 
        correcto = false;
    } 


    if(correcto == false){
        return false;
    }
}

function eliminarError(id){
    document.getElementById(id+'Help').style.visibility="hidden"; 
    document.getElementById(id).style.borderColor="lightgray"; 
}