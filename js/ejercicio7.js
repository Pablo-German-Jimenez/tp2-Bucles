// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


const numrep = parseInt(
  prompt("Ingresa un numero de repeticiones entre 1 y 50")
);
if (!isNaN(numrep)) {

  if (numrep >= 1 && numrep <= 50) {

    for (let i = numrep; i >= 1; i--) {

      for (let rep = i; rep >= 1; rep--) {
        document.writeln(i);
      }
      document.writeln("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
} else {
  alert("valor erroneo");
}
