// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = 0;
let numeroIngresado = 0;

do {
	numero = prompt('Ingresa un numero');
	
	console.log(numero);
	if (!isNaN(parseInt(numero)) || numero !=null) {
		
		
        suma = suma + parseInt(numero);
        console.log('suma ' + suma);
	} else {
	
		if (numero != null) {
			alert(numero + ' No es un numero');
		}
	}
	
} while (numero != null);

document.writeln('Total: '+ suma);
