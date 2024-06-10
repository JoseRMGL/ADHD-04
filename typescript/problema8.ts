function comprobarNumeroPerfecto() {
    const inputNum = document.getElementById("numeroInput") as HTMLInputElement;
    const resultadoParrafo: HTMLParagraphElement = document.getElementById("resultado") as HTMLParagraphElement;
    const numero: number = parseInt(inputNum.value);
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        resultadoParrafo.textContent = `${numero} es un número perfecto`;
    } else {
        resultadoParrafo.textContent = `${numero} no es un número perfecto`;
    }
}
l