function contarVocal() {
    const texto: string = document.getElementById("text").value.toLowerCase();
    const resultado = document.getElementById("resultado") as HTMLParagraphElement;
    let vocales: number = 0;

    for (let i = 0; i < texto.length; i++) {
        const caracter: string = texto.charAt(i);
        if ("aeiouáéíóúü".indexOf(caracter) !== -1) {
            vocales++;
        }
    }

    resultado.textContent = `El texto tiene ${vocales} vocales.`;
}
