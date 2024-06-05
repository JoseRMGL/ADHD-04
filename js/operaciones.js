var intputNumero1 = document.getElementById("txtNumero1");
var intputNumero2 = document.getElementById("txtNumero2");
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMultiplicacion = document.getElementById("btnMultiplicar");
var btnDivision = document.getElementById("btnDivision");
// añadir metodos a los botones
btnSuma.addEventListener('click', suma);
btnResta.addEventListener('click', resta);
btnMultiplicacion.addEventListener('click', multi);
btnDivision.addEventListener('click', divi);
// Enlazar etiqueta div donde se mostrara el resultado
var divResultado = document.getElementById("resultado");
var numero1 = 0;
var numero2 = 0;
// crear metodos
function recibirValores() {
    numero1 = parseFloat(intputNumero1.value);
    numero2 = parseFloat(intputNumero2.value);
}
function suma() {
    recibirValores();
    var suma = numero1 + numero2;
    divResultado.textContent = "La suma es: " + suma;
}
function resta() {
    recibirValores();
    var resta = "La resta es: " + (numero1 - numero2);
    divResultado.textContent = resta;
}
function multi() {
    recibirValores();
    var multi = "La multiplicacion es: " + (numero1 * numero2);
    divResultado.textContent = multi;
}
function divi() {
    recibirValores();
    var division = "La division es: " + (numero1 / numero2);
    divResultado.textContent = division;
}
