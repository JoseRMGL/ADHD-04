const inputNum1 = document.getElementById("num1") as HTMLInputElement;
const inputNum2 = document.getElementById("num2") as HTMLInputElement;
const resulado = document.getElementById("resultado") as HTMLParagraphElement;
const btnArea = document.getElementById("btnArea") as HTMLButtonElement;
btnArea.addEventListener('click', area);
let numero1: number = 0;
let numero2: number = 0;
function valores() {
    let respuesta: number = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100
    }
    return respuesta;
}

function area() {
    const area = (numero1 * numero2) / 2;
    if (valores() == 100) {
        resulado.textContent = "Valores ingresados incorrectos, por favor vuelva a escribirlos correctamente";
    }else {
        resulado.textContent = "El area del triangulo es: " + area;
    }
}