// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let respuestas = document.querySelector("#respuestas");
let recorrePalabra = "";

let fraseUsuario = prompt("Ingresa una frase para invertirla!");

for (i = fraseUsuario.length - 1; i >= 0; i--) {
  recorrePalabra += fraseUsuario[i];
}
respuestas.innerHTML = `<h2 class='text-yellow text-center'>La palabra invertida es ${recorrePalabra}</h2>`;
