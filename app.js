let numeroSecreto = 0; //Solo es para declarar la variable, el 0 es pq al profe no le gusta dejarlo sin valor
let intentos = 0; //Lo mismo aqui
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // Aqui no estoy retornando nada, es una buena practica
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acert
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 

    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }
    else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();