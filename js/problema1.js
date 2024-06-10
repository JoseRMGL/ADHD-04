var inputNum1 = document.getElementById("num1");
var inputNum2 = document.getElementById("num2");
var inputNum3 = document.getElementById("num3");
var btnPromedio = document.getElementById("btnPromedio");
var resultado = document.getElementById("resultado");
btnPromedio.addEventListener('click', promedio);
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
function valores() {
    var respuesta = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    numero3 = parseFloat(inputNum3.value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        respuesta = 100;
    }
    return respuesta;
}
function promedio() {
    if (valores() == 100) {
        resultado.textContent = "Valores agregados incorrectos";
    }
    else {
        var promedio_1 = (numero1 + numero2 + numero3) / 3;
        resultado.textContent = "El promedio es: " + promedio_1;
    }
}
