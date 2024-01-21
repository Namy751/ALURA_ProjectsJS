alert('Hola mundo bienvenidos');

//Variables
let numMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numMaximo)+1;
let numeroUsuario = 0;

let intentos = 1;
let maximosIntentos = 5;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingrese un número entre 1 y ${numMaximo} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición, se hace uso de un operador ternario donde ? es similar a if y : un else
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
