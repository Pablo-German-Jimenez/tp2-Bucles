/* 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let cadenaTexto = '';
do{
  const palabra = prompt('ingrese una palabra');
  console.log(palabra)
  if(cadenaTexto.length ===0){
    cadenaTexto= palabra;

  }else{
    cadenaTexto= palabra + '-' +palabra;
    document.writeln(cadenaTexto)
  }
}while(confirm('quiere continuar?'))