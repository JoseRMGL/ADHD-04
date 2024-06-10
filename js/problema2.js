var inputNum1 = document.getElementById("num1");
var inputNum2 = document.getElementById("num2");
var resulado = document.getElementById("resultado");
var btnArea = document.getElementById("btnArea");
btnArea.addEventListener('click', area);
var numero1 = 0;
var numero2 = 0;
function valores() {
    var respuesta = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}
function area() {
    var area = (numero1 * numero2) / 2;
    if (valores() == 100) {
        resulado.textContent = "Valores ingresados incorrectos, por favor vuelva a escribirlos correctamente";
    }
    else {
        resulado.textContent = "El area del triangulo es: " + area;
    }
}
