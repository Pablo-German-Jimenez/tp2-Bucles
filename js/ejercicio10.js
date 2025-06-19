// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

const filas = parseInt(prompt('Ingrese un numero de filas'));
const columnas = parseInt(prompt('Ingrese un numero de columnas'));
// total valor para cargar las celdas de la tabla
console.log(filas,columnas);
let total = filas * columnas;

document.writeln('<table border>');
for(let indiceFila=0; indiceFila < filas; indiceFila++){
    // aqui dibujo la fila
    document.writeln('<tr>');
    // dibujar las celdas
    for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
        document.writeln('<td>'+total+'</td>');
         total--; //total = total-1;
    }
    document.writeln('</tr>');
}
document.writeln('</table>');


/*let filas = parseInt(prompt('Dame el numero de filitas'));

let columnas = prompt('Ahora dime la cantidad de columnitas');
console.log(filas,columnas);


document.writeln = `<table '><tbody>`;
for( let indiceFilas =0; indiceFilas<filas;indiceFilas++){
document.writeln = `<tr '><td >35</td></tr>`;
}

document.writeln = `</tbody></table>`;*/