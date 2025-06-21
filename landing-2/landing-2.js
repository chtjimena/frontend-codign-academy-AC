window.addEventListener('load', () => {
    // alert('Bienvenido a NextDevs') // muestra una alerta
    /*const apellido = 'coello';
    console.log('apellido ', apellido);
    let name = prompt( '¿Cual es tu nombre?'); // muestra un cuadro de dialogo
    console.log('Bienvenido ' + name);
    if (!name) {
        name = prompt('¿Cual es tu nombre?, te lo pregunto por segunda vez');
    }
    alert('Bienvenido ' + name)*/
    document.querySelector('.hero-content').classList.add('visible') // agrega una clase al bloque hero-content
})

// var // se crea variables de forma global, (no se recomienda)
// let // se crea variables de forma local
// const // se crea variables de forma constante

// Tipo de datos
"Soy comillas dobles" // String 
'Soy comillas simples' // String
`Soy template literals` // String

0 // Number
0.5 // Number
-5.7 // Number

true // Boolean
false // Boolean

const cuenta_bancaria = null;
null // Null

const no_existe_cuenta_bancaria = undefined;
undefined // Undefined

NaN // Not a Number

Number('5')
String(8)
Boolean(10)

// Operadores
5 + 5 // Suma
5 - 5 // Resta
5 * 5 // Multiplicación
5 / 5 // División
5 % 5 // Resto
5 ** 5 // Exponencia

// Operadores de asignación
let a = 5;
a += 5 // a = a + 5
a -= 5 // a = a - 5
a *= 5 // a = a * 5
a /= 5 // a = a / 5
a %= 5 // a = a % 5
a **= 5 // a = a ** 5

// Arreglos
const arreglo = [1, 2, 3, 4, 5]
arreglo[0] // 1
arreglo[1] // 2
arreglo[2] // 3
arreglo[3] // 4
arreglo[4] // 5

// Objetos
const persona = {
    'nombre': 'Luis',
    'apellido': 'Coello',
    'edad': 20
}

persona['nombre'] // Luis
persona['apellido'] // Coello
persona['edad'] // 20

// condicionales
const tengo_permiso_de_mi_mama = false;
const tengo_permiso_de_mi_papa = false;

if (tengo_permiso_de_mi_mama) {
    console.log(' Si tengo permiso de mi mama ');
} else if (tengo_permiso_de_mi_papa) {
    console.log(' Si tengo permiso de mi papa ');
} else {
    console.log(' No tengo permiso de mi mama ni mi papa ');
}

if (tengo_permiso_de_mi_mama && tengo_permiso_de_mi_papa) {
    console.log(' Si sali a jugar ');
}

const color = 'amarillo';
//switch
switch (color) {
    case 'rojo':
        console.log(' Si tengo permiso de mi mama ');
        break;
    case 'verde':
        console.log(' Si tengo permiso de mi papa ');
        break;
    default:
        console.log(' No tengo permiso de mi mama ni mi papa ');
        break;
}

// Ciclos
// PARA
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// MIENTRAS
while (i < 10) {
    console.log(i);
    i++;
}

// DO WHILE
do {
    console.log(i);
    i++;
} while (i < 10);

[].forEach(element => {
    console.log(element);
});

// Funciones
function saludar() {
    console.log('Hola');
}

const saludar = () => {
    console.log('Hola');
}