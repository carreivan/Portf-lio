
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9,14}$/ // 7 a 14 numeros.
    //mensaje: /^[a-zA-ZÀ-ÿ\s\W]{5,200}$/
}

const campos = {
	
	nombre: false,
	correo: false,
	telefono: false,
   //  mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
       //  case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
         break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre  && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

//FORMULARIO ANTIGO 

// var formulario = document.getElementById('formulario'),
// nombre = formulario.nombre,
// correo = formulario.correo,
// mensaje = formulario.mensaje,
// error = document.getElementById('error');



// function validarNombre(e){
// if (nombre.value == '' || nombre.value == null || nombre.length < 3){
//     console.log('Por Favor Insira seu Nome');
//     error.style.display = 'block';
//     error.innerHTML += '<li>Por Favor Insira seu Nome</li>'; 
    
//     e.preventDefault();
//      } /*else {
//          error.style.display = 'none';
//      }*/

// }

// function validarMensaje(e){
//     if (mensaje.value == '' || mensaje.value == null){
//         console.log('Por Favor Insira seu Mensagem');
//         error.style.display = 'block';
//         error.innerHTML += '<li>Por Favor Insira seu Mensagem</li>'; 
    
//         e.preventDefault();
//          } /*else {
//              error.style.display = 'none';
//          }*/
    
//     }


// function validarCorreo(e){
//     if (correo.value == '' || correo.value == null){
//         console.log('Por favor Insira seu E-mail');
//         error.style.display = 'block';
//         error.innerHTML += '<li>Por favor Insira seu E-mail</li>'; 
    
//         e.preventDefault();

//     }/*else {
//         error.style.display = 'none';
//         }*/
// }

// function validarFormulario(e){
//     error.innerHTML = "";
//     validarNombre(e);
//      validarCorreo(e);
//      validarMensaje(e);
// }
// formulario.addEventListener('submit', validarFormulario);