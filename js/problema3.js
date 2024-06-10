var inputNum = document.getElementById("num1");
var resultado = document.getElementById("resultado");
var bntParoImpar = document.getElementById("bntParoImpar");
bntParoImpar.addEventListener('click', parImpar);
var numero = parseFloat(inputNum.value);
function valor() {
    var respuesta;
    numero = parseFloat(inputNum.value);
    if (isNaN(numero)) {
        respuesta = 100;
    }
    return respuesta;
}
function parImpar() {
    if (valor() == 100) {
        resultado.textContent = "Valores ingresados incorrectos, vuelva a ingresar correctamente los valores";
    }
    if (numero % 2 == 0) {
        resultado.textContent = "El numero es par";
    }
    else {
        resultado.textContent = "El numero es impar";
    }
    ;
}
