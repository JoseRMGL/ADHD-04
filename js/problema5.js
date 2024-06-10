var inputNum1 = document.getElementById("num1");
var inputNum2 = document.getElementById("num2");
var resultado = document.getElementById("resultado");
var btnPotencia = document.getElementById("btnPotencia");
btnPotencia.addEventListener('click', potencia);
var numero1 = 0;
var numero2 = 0;
function valores() {
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    var respuesta;
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}
function potencia() {
    if (valores() == 100) {
        resultado.textContent = "Valores ingresados incorrectos";
    }
    var result = 1;
    for (var i = 0; i < numero2; i++) {
        result *= numero1;
    }
    resultado.textContent = "El resultado de la potencia es: " + result;
}
