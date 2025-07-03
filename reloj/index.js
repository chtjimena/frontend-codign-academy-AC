const crearReloj = () => {
    const now = new Date();
    const hora = String(now.getHours()).padStart(2, '0');
    // const minutos = `${now.getMinutes()}`.padStart(2, '0');
    // const minutos = now.getMinutes().toString().padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    // const horaActual = hora + ':' + minutos + ':' + segundos;
    const horaActual = `${hora}:${minutos}:${segundos}`;
    document.getElementById('reloj').innerText = horaActual;

    console.log('now ', now, horaActual);
}

// setInterval(crearReloj, 1000);

// progreso mediante bar

const barElement = document.getElementById('progress-bar');
let progress = 0;

const interval = setInterval(() => {
    progress = progress + 5;
    barElement.style.width = `${progress}%`;
    barElement.innerText = `${progress}%`;
    if (progress >= 100) clearInterval(interval);
}, 1500);

// Alterar tiempo, horas, minutos, segundos

const now = new Date();
const obtenerDiaFuturo = now.getDate() + 7;
const modificarDia = now.setDate(obtenerDiaFuturo);
console.log('modificarDia ', new Date(modificarDia).toISOString());

// Ejemplo de semana y meses

const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const obtenerDia = dias[now.getDay()];
const obtenerMes = meses[now.getMonth()];

console.log('Hoy es ' + obtenerDia + ' del mes ' + obtenerMes);
