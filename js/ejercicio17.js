// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let respuestas = document.querySelector("#respuestas");
const texto = prompt("Ingresá un texto para encontrar la primera vocal:");

let posicionPrimeraVocal = -1;

const textoEnMinusculas = texto.toLowerCase();

for (let i = 0; i < textoEnMinusculas.length; i++) {
  const caracter = textoEnMinusculas.charAt(i);
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    posicionPrimeraVocal = i;
    break;
  }
}

if (posicionPrimeraVocal !== -1) {
  respuestas.innerHTML = `<h2 class='text-info text-center'>La primera vocal está en la posición:${
    posicionPrimeraVocal + 1
  }</h2>`;
} else {
  respuestas.innerHTML = `<h2 class='text-danger text-center'>No se encontraron vocales en el texto ingresado.</h2>`;
}
