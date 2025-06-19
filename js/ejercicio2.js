/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let num = parseInt(prompt("Ingresa una nota de 0 a 10!"));
let respuestas = document.querySelector("#respuestas");
if (!isNaN(num) || (num > 0) & (num < 10)) {
  switch (num) {
    case 1:
    case 2:
      respuestas.innerHTML = '<h1 class="text-danger">Muy deficiente</h1>';
      break;
    case 3:
    case 4:
      respuestas.innerHTML = `<h2 class="text-danger">Insuficiente</h2>`;
      break;
    case 5:
    case 6:
      respuestas.innerHTML = `<h2 class="text-warning">Suficiente</h2>`;
      break;
    case 7:
      respuestas.innerHTML = `<h2 class="text-primary">Bien!</h2>`;
      break;
    case 8:
    case 9:
      respuestas.innerHTML = "<h2 class='text-info-emphasis'>Notable!</h2>";
      break;
    case 10:
      respuestas.innerHTML = `<h2 class="text-success">Sobresaliente!</h2>`;
  }
} else {
  respuestas.innerHTML = `<h2 class="text-danger">Ingrese un número válido</h2>`;
}
