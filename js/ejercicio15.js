// 15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingresá un texto para contar sus vocales:");


let contadorVocales = 0;


const textoEnMinusculas = texto.toLowerCase();


for (let i = 0; i < textoEnMinusculas.length; i++) {
 caracter = textoEnMinusculas.charAt(i);


  if (caracter === 'a' ||
      caracter === 'e' ||
      caracter === 'i' ||
      caracter === 'o' ||
      caracter === 'u') {

    contadorVocales++;
  }
}


document.writeln("El texto '" + texto + "' tiene " + contadorVocales + " vocales.");