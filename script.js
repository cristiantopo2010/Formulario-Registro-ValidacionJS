const submitFunction = (event) => {
    if(!validarFormulario()){
        // Previene la actualización del sitio web
        event.preventDefault();
    } else {
        event.preventDefault();

        // Se envia un mensaje para que el usuario revise los datos que ingreso
        alert(
            'Los datos enviados fueron: ' + '\n' +
            'Nombre: ' + document.getElementById("nombre").value + '\n' +
            'Apellido: ' + document.getElementById("apellido").value + '\n' +
            'Documento: ' + document.getElementById("documento").value + '\n' +
            'Email: ' + document.getElementById("email").value + '\n' +
            'Edad: ' + document.getElementById("edad").value + '\n' +
            'Actividad: ' + document.getElementById("actividad").value + '\n' +
            'Nivel de Estudio: ' + document.getElementById("nivelEstudio").value + '\n'
        )
    }

}

//addEventListener registra un evento a un objeto
document.getElementById("formulario").addEventListener("submit", submitFunction)

//Validar formulario
function validarFormulario(){
    // Validacion de nombre, apellido y documento
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // Saca el error + id con la primera letra en mayuscula
        if(campo.value.length == ''){
            mostrarError(errorCampo, "Este campo es requerido")
            validacionCorrecta = false
        } else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres")
            validacionCorrecta = false
        } else {
            ocultarError(errorCampo)
        }
    })

    // Validacion de email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    // El Regex valida que el formato del email sea valido
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    } else {
        mostrarError(errorEmail, "Ingresa un email válido")
        validacionCorrecta = false
    }

    // Validacion de edad
    const edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");
    if(edad.value < 18){
        mostrarError(errorEdad, "Debes ser mayor de edad para registrarte")
        validacionCorrecta = false
    } else {
        ocultarError(errorEdad)
    }

    // Validacion de actividad
    const actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");
    if(actividad.value == ""){
        mostrarError(errorActividad, "Por favor, selecciona una actividad")
        validacionCorrecta = false
    } else {
        ocultarError(errorActividad)
    }

    // Validacion de nivel de estudios
    const nivelEstudio = document.getElementById("nivelEstudio");
    let errorNivelEstudio = document.getElementById("errorNivelEstudio");
    if(nivelEstudio.value == ""){
        mostrarError(errorNivelEstudio, "Por favor, selecciona una opción")
        validacionCorrecta = false
    } else {
        ocultarError(errorNivelEstudio)
    }

    // Validar los terminos y condiciones
    const aceptoTerminos = document.getElementById("aceptoTerminos");
    let errorAceptoTerminos = document.getElementById("errorAceptoTerminos");
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, "Debes aceptar los terminos y condiciones")
        validacionCorrecta = false
    } else {
        ocultarError(errorAceptoTerminos)
    }

    // Esto permite que el formulario sea valido
    return validacionCorrecta;
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}