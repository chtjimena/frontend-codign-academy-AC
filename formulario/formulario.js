let formElement = document.getElementById('formulario');
formElement.addEventListener('submit', event => {
    // previene el efecto de recargar la pagina
    event.preventDefault();

    let inputNameElement = document.getElementById('nombre');
    let valueInputName = inputNameElement.value.trim();

    // validacion de campo nombre
    if (!valueInputName) {
        alert('El campo nombre es requerido');
        inputNameElement.classList.add('is-invalid');
        return;
    } else {
        inputNameElement.classList.remove('is-invalid');
        inputNameElement.classList.add('is-valid');
    }

    let valueInputEmail = document.getElementById('correo').value.trim();
// validacion de campo correo
    if (!valueInputEmail) {
        alert('El campo correo es requerido');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valueInputEmail)) {
        alert('El correo no es valido');
        return;
    }

    let valueInputPhone = document.getElementById('telefono').value.trim();
// validacion de campo numbero de telefono
    if (!valueInputPhone) {
        alert('El campo teléfono es requerido');
        return;
    }

    const phoneNumberRegex = /^\+(?:\d{1,3})[\s-]?(?:\d{6,14})$/;
    if (!phoneNumberRegex.test(valueInputPhone)) {
        alert('El numero de teléfono no es valido');
        return;
    }

    // validacion de select
    let inputCountryElement = document.getElementById('pais');
    let valueInputCountry = inputCountryElement.value.trim();

    const listCountries = Array.from(inputCountryElement.children).map(option => option.value).slice(1);
    console.log('listCountries ', listCountries);
    if (!listCountries.includes(valueInputCountry)) {
        alert('El país no es valido');
        return;
    }

    // validacion de radio
    let valueInputGender = document.querySelector('input[name="genero"]:checked')?.value;
    if (!valueInputGender) {
        alert('El campo de genero es requerido');
        return;
    }

    // validar checkbox
    let valueInputLeer = document.getElementById('leer').checked;
    if (!valueInputLeer) {
        alert('El campo de leer es requerido');
        return;
    }

    // validar campo comentarios
    let valueInputComments = document.getElementById('comentarios').value.trim();
    if (!valueInputComments) {
        alert('El campo de comentarios es requerido');
        return;
    }

    if (valueInputComments.length > 100) {
        alert('El campo de comentarios debe tener menos de 100 caracteres');
        return;
    }

    document.getElementById('mensaje-exitoso').innerText = 'Enviastes los datos de tu formulario';
    alert('Enviastes los datos de tu formulario');
    formElement.reset();
});
