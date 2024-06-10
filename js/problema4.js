function mayorMenor() {
    var inputNum1 = (document.getElementById('num1').value);
    var inputNum2 = (document.getElementById('num2').value);
    var inputNum3 = (document.getElementById('num3').value);
    var mayor = inputNum1;
    var menor = inputNum1;
    var medio;
    if (inputNum2 > mayor) {
        mayor = inputNum2;
    }
    else if (inputNum2 < menor) {
        menor = inputNum2;
    }
    if (inputNum3 > mayor) {
        mayor = inputNum3;
    }
    else if (inputNum3 < menor) {
        menor = inputNum3;
    }
    if (inputNum1 === mayor || inputNum1 === menor) {
        medio = inputNum2 > inputNum3 ? inputNum3 : inputNum2;
    }
    else if (inputNum2 === mayor || inputNum2 === menor) {
        medio = inputNum1 > inputNum3 ? inputNum3 : inputNum1;
    }
    else {
        medio = inputNum1 > inputNum2 ? inputNum2 : inputNum1;
    }
    document.getElementById('resultado').textContent = "\n        El n\u00FAmero mayor es: ".concat(mayor, "   El n\u00FAmero menor es: ").concat(menor, "    El n\u00FAmero medio es: ").concat(medio, "\n    ");
}
