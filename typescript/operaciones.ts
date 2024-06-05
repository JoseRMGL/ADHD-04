const intputNumero1 = document.getElementById("txtNumero1") as HTMLInputElement;
const intputNumero2 = document.getElementById("txtNumero2") as HTMLInputElement;
const btnSuma = document.getElementById("btnSuma") as HTMLButtonElement;
const btnResta = document.getElementById("btnResta") as HTMLButtonElement;
const btnMultiplicacion = document.getElementById("btnMultiplicar") as HTMLButtonElement;
const btnDivision = document.getElementById("btnDivision") as HTMLButtonElement;

// añadir metodos a los botones
btnSuma.addEventListener('click', suma);
btnResta.addEventListener('click', resta);
btnMultiplicacion.addEventListener('click', multi);
btnDivision.addEventListener('click', divi);
// Enlazar etiqueta div donde se mostrara el resultado
const divResultado = document.getElementById("resultado") as HTMLParagraphElement;

let numero1: number = 0;
let numero2: number = 0;
// crear metodos
function recibirValores() {
    let respuesta = 0;
    numero1 = parseFloat(intputNumero1.value);
    numero2 = parseFloat(intputNumero2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;

}

function suma() {
    if (recibirValores()==100) {
        divResultado.textContent = "Valores agregados incorrectos"
    }else{
    const suma = numero1 + numero2;
    divResultado.textContent = "La suma es: " + suma;
    }
}

function resta() {
    recibirValores();
    const resta = "La resta es: " + (numero1 - numero2);
    divResultado.textContent = resta;
}

function multi() {
    recibirValores();
    const multi = "La multiplicacion es: " + (numero1 * numero2);
    divResultado.textContent = multi

}

function divi() {
    recibirValores();
    const division = "La division es: " + (numero1 / numero2);
    divResultado.textContent = division;
}