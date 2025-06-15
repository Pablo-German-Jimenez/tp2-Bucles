/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
 
const numUsuario = parseInt(prompt('Dame numerito hasta que presiones cancelar'))
let contadorWhile = 0;
while(isNaN(numUsuario)){
    alert('no es un numerito')
}