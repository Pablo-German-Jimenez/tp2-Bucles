// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//Declaro un arreglo de vocales
const vocales = ["a", "e", "i", "o", "u"];
const texto = prompt("Ingrese una frase");
// transformo el texto a minusculas
const textoMinisculas = texto.toLowerCase();
let posicion = 0;
//Creo una variable bandera para detener el bucle
let stop = false;

for (let i = 0; i < textoMinisculas.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] === textoMinisculas.charAt(i)) {
      posicion = i;
      stop = true;
      break;
    }
  }
  // aqui preguntamos si stop == true, si lo es salgo del bucle
  if (stop) {
    break;
  }
}
if(stop!= true){
  document.writeln(`La palabra ingresada no tiene vocales` );
}else{
  document.writeln(`La primera vocal '${textoMinisculas.charAt(posicion)}' está en la posición ${posicion}` );
}
