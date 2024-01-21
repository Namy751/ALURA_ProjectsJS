
alert('Bienvenido al desafio 4');
// Mensaje de bienvenida
console.log("¡Bienvenido al programa de desafios 4!");

// Saludo con console.log
let nombre = "Nahomy";
console.log(`¡Hola, ${nombre}!`);

// Saludo con alert
nombre = "Nahomy";
alert(`¡Hola, ${nombre}!`);

// Pregunta con prompt y muestra en la consola
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Tu lenguaje favorito que seleccionaste es: ${lenguaje}`);

// Suma de dos valores
let valor1 = 75;
let valor2 = 38;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Resta de dos valores
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// Verificación de edad con prompt e if-else
let edad = prompt("Ingrese su edad:");
edad = parseInt(edad);

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Verificación de número positivo, negativo o cero
let numero = prompt("Ingrese un número:");
numero = parseFloat(numero);

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// Bucle while para mostrar números del 1 al 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Evaluación de nota con if-else
let nota = prompt("Ingrese su nota:");
nota = parseFloat(nota);

if (nota >= 7) {
  console.log("Aprobado.");
} else {
  console.log("Reprobado.");
}

// Número aleatorio entre 0 y 1
let numeroAleatorio = Math.random();
console.log(`Número aleatorio entre 0 y 1: ${numeroAleatorio}`);

// Número entero aleatorio entre 1 y 10
let numeroEnteroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(`Número entero aleatorio entre 1 y 10: ${numeroEnteroAleatorio}`);

// Número entero aleatorio entre 1 y 1000
let numeroEnteroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número entero aleatorio entre 1 y 1000: ${numeroEnteroAleatorio1000}`);
