function factorial() {
    const num = parseFloat((document.getElementById("num") as HTMLInputElement).value);
    const resultado = document.getElementById("resultado") as HTMLParagraphElement;
    let factorial: number = 1;
    for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
    }
    resultado.textContent = `El factorial de ${num} es: ${factorial}`
}
