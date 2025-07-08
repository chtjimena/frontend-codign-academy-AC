const divResultado = document.getElementById('resultado');
const inputElement = document.getElementById('entrada');
const divTiempo = document.getElementById('tiempo');
const divPalabra = document.getElementById('palabra');
const btnInit = document.getElementById('comenzar');

const palabras = ['java', 'php', 'C#', 'C++', 'Go', 'Rust', 'Javascript', 'Python', 'Laravel', 'React', 'Angular', 'Vue'];
let tiempoRestante = 10;
let temporizador;
let palabraActual = "";

btnInit.addEventListener('click', function() {
    inputElement.disabled = false;
    const random = Math.floor(Math.random() * palabras.length);
    palabraActual = palabras[random];
    divPalabra.innerText = palabraActual;

    divTiempo.innerText = `Tiempo: ${tiempoRestante} segundos`;

    temporizador = setInterval(function() {
        tiempoRestante--;
        divTiempo.innerText = `Tiempo: ${tiempoRestante} segundos`;

        if (tiempoRestante === 0) {
            clearInterval(temporizador);
            verificarResultado();
        }
    }, 1000);
});

function verificarResultado() {
    const valueInput = inputElement.value.trim();
    
    if (valueInput.toLowerCase() === palabraActual.toLowerCase()) {
        divResultado.innerText = 'Correcto';
    } else {
        divResultado.innerText = 'Incorrecto';
    }
}

inputElement.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        clearInterval(temporizador);
        verificarResultado();
    }
});
