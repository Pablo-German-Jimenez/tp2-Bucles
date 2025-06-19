// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

let numeroRepeticiones = parseInt(
  prompt("Dime numeros de 1 al 30 para hacer una pirámide zarpada!")
);

let respuestas = document.querySelector("#respuestas");

if (!isNaN(numeroRepeticiones) && numeroRepeticiones < 31) {
  for (let fila = 0; fila < numeroRepeticiones; fila++) {
    for (let columna = 1; columna < fila; columna++) {
      respuestas.innerHTML += `${fila}`;
    }
    respuestas.innerHTML += `<br>`;
  }
} else {
  document.writeln(`caracter o numero invalido`);
}
