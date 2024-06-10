function comprobarNumeroPerfecto() {
    var inputNum = document.getElementById("numeroInput");
    var resultadoParrafo = document.getElementById("resultado");
    var numero = parseInt(inputNum.value);
    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        resultadoParrafo.textContent = "".concat(numero, " es un n\u00FAmero perfecto");
    }
    else {
        resultadoParrafo.textContent = "".concat(numero, " no es un n\u00FAmero perfecto");
    }
}
