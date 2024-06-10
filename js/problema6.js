function testoInverso() {
    var texto = (document.getElementById("text1").value);
    var resultado = document.getElementById("resultado");
    var textoInverso = texto.split('').reverse().join('');
    resultado.textContent = textoInverso;
}
