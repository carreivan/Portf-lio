var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
mensaje = formulario.mensaje,
error = document.getElementById('error');

function validarNombre(e){
if (nombre.value == '' || nombre.value == null){
    console.log('Por Favor Insira seu Nome');
    error.style.display = 'block';
    error.innerHTML += '<li>Por Favor Insira seu Nome</li>'; 

    e.preventDefault();
     } /*else {
         error.style.display = 'none';
     }*/

}

function validarMensaje(e){
    if (mensaje.value == '' || mensaje.value == null){
        console.log('Por Favor Insira seu Mensagem');
        error.style.display = 'block';
        error.innerHTML += '<li>Por Favor Insira seu Mensagem</li>'; 
    
        e.preventDefault();
         } /*else {
             error.style.display = 'none';
         }*/
    
    }


function validarCorreo(e){
    if (correo.value == '' || correo.value == null){
        console.log('Por favor Insira seu E-mail');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor Insira seu E-mail</li>'; 
    
        e.preventDefault();

    }/*else {
        error.style.display = 'none';
        }*/
}

function validarFormulario(e){
    error.innerHTML = "";
    validarNombre(e);
     validarCorreo(e);
     validarMensaje(e);
}
formulario.addEventListener('submit', validarFormulario);
