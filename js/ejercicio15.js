// 15- Realiza un script que cuente el número de vocales que tiene un texto.

const textoUsuario = prompt("Ingresá un texto para contar sus vocales:");
const respuestas = document.querySelector("#respuestas");

const textoEnMinusculas = textoUsuario.toLowerCase();
let contadorVocales = 0;

for (let i = 0; i < textoEnMinusculas.length; i++) {
  caracter = textoEnMinusculas.charAt(i);

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    contadorVocales++;
  }
}

respuestas.innerHTML = `<h2 class='text-success text-center'>El texto ${textoEnMinusculas}, tiene ${contadorVocales} vocales.</h2>`;
