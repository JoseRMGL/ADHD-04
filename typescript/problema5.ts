const inputNum1 = document.getElementById("num1") as HTMLInputElement;
const inputNum2 = document.getElementById("num2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;
const btnPotencia = document.getElementById("btnPotencia") as HTMLButtonElement;


btnPotencia.addEventListener('click', potencia);

let numero1: number = 0;
let numero2: number = 0;

function valores() {
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    let respuesta;
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}

function potencia() {
    if (valores() == 100) {
        resultado.textContent = "Valores ingresados incorrectos";
    }
    let result = 1;
    for (let i = 0; i < numero2; i++) {
        result *= numero1;
    }
    resultado.textContent = "El resultado de la potencia es: " + result;
}
