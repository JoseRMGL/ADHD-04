const inputNum = document.getElementById("num1") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;
const bntParoImpar = document.getElementById("bntParoImpar") as HTMLButtonElement;
bntParoImpar.addEventListener('click', parImpar);
let numero: number = parseFloat(inputNum.value);

function valor(){
    let respuesta;
    numero = parseFloat(inputNum.value);
    if (isNaN(numero)) {
        respuesta = 100
    }
    return respuesta;
}

function parImpar() {
    if (valor()==100) {
        resultado.textContent = "Valores ingresados incorrectos, vuelva a ingresar correctamente los valores"
    }
    if (numero % 2 == 0) {
        resultado.textContent = "El numero es par"
    }else {
        resultado.textContent = "El numero es impar"
    };
}