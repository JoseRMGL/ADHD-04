function testoInverso() {
const texto: string =(( document.getElementById("text1") as HTMLInputElement).value);
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

let textoInverso : string = texto.split('').reverse().join('');
resultado.textContent = textoInverso;
}