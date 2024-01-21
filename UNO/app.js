alert('Hola mundo bienvenidos');

let numeroUsuario = 0;
let numeroSecreto = 6;
let intentos = 1;

while (numeroUsuario != numeroSecreto) {
    let numero = prompt('Ingrese un numero del 1 al 10');
    numeroUsuario = parseInt(numero); // Convierte la entrada a un número

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades, acertaste! El numero secreto es ${numeroSecreto} en ${intentos} intento(s)`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos = intentos + 1;
    }
}
