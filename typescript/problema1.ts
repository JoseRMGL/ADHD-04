const inputNum1 = document.getElementById("num1") as HTMLInputElement;
const inputNum2 = document.getElementById("num2") as HTMLInputElement;
const inputNum3 = document.getElementById("num3") as HTMLInputElement;
const btnPromedio = document.getElementById("btnPromedio") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

btnPromedio.addEventListener('click', promedio);

let numero1: number = 0;
let numero2: number = 0;
let numero3: number = 0;
function valores() {
    let respuesta: number = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    numero3 = parseFloat(inputNum3.value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        respuesta = 100;
    }
    return respuesta
}

function promedio() {
    if (valores() == 100) {
        resultado.textContent = "Valores agregados incorrectos"
    }else {
        const promedio = (numero1 + numero2 + numero3)/3;
        resultado.textContent = "El promedio es: " + promedio;
    }
}