function factorial() {
    var num = parseFloat(document.getElementById("num").value);
    var resultado = document.getElementById("resultado");
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    resultado.textContent = "El factorial de ".concat(num, " es: ").concat(factorial);
}
