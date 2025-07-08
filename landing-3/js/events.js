const btnSearchElement = document.querySelector('.btn-search');
// btnSearchElement.addEventListener('click', () => console.log('Le distes click al boton'));
// btnSearchElement.addEventListener('dblclick', () => console.log('le distes doble click al boton'));

const formSearchElement = document.getElementById('formularioSearch');
formSearchElement.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('enviastes los datos de tu formulario');
})

const seccionNavegation = document.getElementById('navegacion');
//seccionNavegation.addEventListener('mouseover', () => console.log('soy el mouse moviendose'))
seccionNavegation.addEventListener('mousemove', () => console.log('soy el mouse dentro del elemento'));

const inputSearchElement = document.getElementById('inputSearch');
//inputSearchElement.addEventListener('input', () => console.log('estas escribiendo'))
//inputSearchElement.addEventListener('change', () => console.log('estas escribiendo v2'))

inputSearchElement.addEventListener('keyup', (event) => console.log('sol-tastes la tecla', event.target.value))

window.addEventListener('scroll', () => {
    // console.log('estas haciendo scroll ', window.scrollY);

    if (window.scrollY >= 1000) {
        document.body.style.backgroundColor = '#000';
    } else if (window.scrollY < 1000) {
        document.body.style.backgroundColor = '#fff';
    }
});

const btnScrollTop = document.querySelector('.btn-scroll-top');
btnScrollTop.addEventListener('click', () => window.scrollTo(0, 0));