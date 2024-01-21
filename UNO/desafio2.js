
alert('Bienvenido al desafio numero 2');
let dia = prompt('¿Qué día de la semana es?');

// Convierte la entrada del usuario a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
dia = dia.toLowerCase();
if (dia == 'sabado' || dia == 'domingo') {
  alert('¡Buen fin de semana!');
} else {
  alert('¡Buena semana!');
}

// Verifica si un número ingresado por el usuario es positivo o negativo
let numeroIngresado = prompt('Ingrese un número:');

if (numeroIngresado > 0) {
  alert('El número ingresado es positivo');
} else if (numeroIngresado < 0) {
  alert('El número ingresado es negativo');
} else {
  alert('El número ingresado es cero');
}

// Crea un sistema de puntuación para un juego
let puntuacion = prompt('Ingresa tu puntuación:');

if (puntuacion >= 100){
    alert('Felicidades has ganado el juego');
} else {
    alert('Intenta de nuevo');
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta
let dineroDisponible = 500;
alert(`Hola! el saldo disponible en tu cuenta es de un total de: ${dineroDisponible}`);

// Pide al usuario que ingrese su nombre mediante un prompt
let usuario = prompt('Ingrese su nombre');
alert(`Hola bienvenido ${usuario}`);