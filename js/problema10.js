function contarVocal() {
    var texto = document.getElementById("text").value.toLowerCase();
    var resultado = document.getElementById("resultado");
    var vocales = 0;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if ("aeiouáéíóúü".indexOf(caracter) !== -1) {
            vocales++;
        }
    }
    resultado.textContent = "El texto tiene ".concat(vocales, " vocales.");
}
