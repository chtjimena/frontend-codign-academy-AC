const btnAdivinarElement = document.querySelector('#btn-adivinar');

let count = 0;
const valueRandomLimit = 10;
const valueRandom = Math.floor(Math.random() * valueRandomLimit);
const inputNumberElement = document.getElementById('input');

btnAdivinarElement.addEventListener('click', () => {
    const valueInputString = inputNumberElement.value.trim();
    const valueInputNumber = Number(valueInputString);

    if (isNaN(valueInputNumber) || valueInputNumber < 0 || valueInputNumber > valueRandomLimit) {
        alert('Debes ingresar un numero valido');
        return;
    }

    // count = count + 1;
    count++;

    if (count > 3) {
        alert('Te quedaste sin intentos');
        return;
    }

    console.log('valueInputNumber ', valueInputNumber);
    console.log('valueRandom ', valueRandom);

    if (valueRandom === valueInputNumber) {
        alert('Felicidades, adivinaste el numero');
    } else if (valueRandom > valueInputNumber) {
        alert('El numero secreto es mayor');
    } else {
        alert('El numero secreto es menor');
    }
});

const btnLimpiarElement = document.getElementById('btn-limpiar');
btnLimpiarElement.addEventListener('click', () => {
    inputNumberElement.value = '';
})
