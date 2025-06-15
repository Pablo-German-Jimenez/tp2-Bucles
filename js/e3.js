/* 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

do{
    const cadenasUsuario = prompt('Ingrese una palabrita para concatenar, o pulse cancelar y mostramos todo eeh!');
    respuestas.innerHTML=`${cadenasUsuario}`;
}while(
    confirm('Deseas continuar?')
)


