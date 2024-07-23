/* Hallar índice de masa corporal IMC */
//Variables
let peso = 0;
let estatura = 0;
let imc = 0;
let imcDosDecimales = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
/*Hechas por Juan Galvis*/
function calcularImc() {
    peso = parseFloat(document.getElementById('peso').value);
    // console.log(peso);
    estatura = parseFloat(document.getElementById('estatura').value);
    // console.log(estatura);
    imc = peso / (estatura * estatura);
    // console.log(imc);
    imcDosDecimales = imc.toFixed(2);

    if (imc >= 25 && imc < 30) {
        asignarTextoElemento('h2', `Tienes sobrepeso, tu IMC es ${imcDosDecimales}`);
    } else if (imc < 18.5) {
        asignarTextoElemento('h2', `Tienes bajo peso, tu IMC es ${imcDosDecimales}`);
    } else if(imc >= 30) {
        asignarTextoElemento('h2', `Estás obeso, tu IMC es ${imcDosDecimales}`);
    } else {
        asignarTextoElemento('h2', `Estás tan bien como Sofy, tu IMC es ${imcDosDecimales}`);
    }

    return;
}

// function limpiarCaja() {
//     document.querySelector('#peso').value = '';
//     document.querySelector('#estatura').value = '';
// }


function condicionesIniciales() {
    asignarTextoElemento('h1','Conoce tu IMC');
    asignarTextoElemento('h2','');
    asignarTextoElemento('p','Escribe tu peso');
    asignarTextoElemento('#parrafo_estatura','Escribe tu estatura');
    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
calcularImc();
condicionesIniciales();


