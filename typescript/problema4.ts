function mayorMenor() {
    const inputNum1 = ((document.getElementById('num1') as HTMLInputElement).value);
    const inputNum2 = ((document.getElementById('num2') as HTMLInputElement).value);
    const inputNum3 = ((document.getElementById('num3') as HTMLInputElement).value);

    let mayor = inputNum1;
    let menor = inputNum1;
    let medio;
    if (inputNum2 > mayor) {
        mayor = inputNum2;
    } else if (inputNum2 < menor) {
        menor = inputNum2;
    }
    if (inputNum3 > mayor) {
        mayor = inputNum3;
    } else if (inputNum3 < menor) {
        menor = inputNum3;
    }
    if (inputNum1 === mayor || inputNum1 === menor) {
        medio = inputNum2 > inputNum3 ? inputNum3 : inputNum2;
    } else if (inputNum2 === mayor || inputNum2 === menor) {
        medio = inputNum1 > inputNum3 ? inputNum3 : inputNum1;
    } else {
        medio = inputNum1 > inputNum2 ? inputNum2 : inputNum1;
    }
    document.getElementById('resultado').textContent = `
        El número mayor es: ${mayor}   El número menor es: ${menor}    El número medio es: ${medio}
    `;

}