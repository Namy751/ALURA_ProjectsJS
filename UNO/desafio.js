// Muestra una alerta de bienvenida
alert('¡Bienvenidos a nuestro sitio web!');

//variables
let nombre = 'Luna';
let edad = 25;
let numeroVentas = 50;
let saldoDisponible = 1000;

//alert('¡Error! Complete todos los campos');

let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);

nombre = prompt('Ingrese su nombre');
edad = prompt('Ingrese su edad');
edad = parseInt(edad);

if (edad >= 18) {
  alert('¡Felicidades puedes obtener tu licencia de conducir!');
}
