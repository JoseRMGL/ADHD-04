function numPrimo() {
    const numero = parseInt(document.getElementById('num').value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').textContent = "Ingrese un número entero positivo";
        return;
    }

    if (numero === 1) {
        document.getElementById('resultado').textContent = "El numero 1 no se considera como numero primo";
        return;
    }

    let Primo = true;

    for (let i = 2; i <= numero - 1; i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }

    const btnResultado = Primo ? `El numero ${numero} es primo` : `El numero ${numero} no es primo`;
    document.getElementById('resultado').textContent = btnResultado;
}
