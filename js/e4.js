/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
 
let sumaNum = 0;

do{
    let numeroIngresado = parseInt(prompt('ingresa un numerito'));
    if(isNaN(numeroIngresado)){
        alert('No valido! ingresar numeritos!');
       continue
    }
    else{
        sumaNum=sumaNum+numeroIngresado;
        
    }
    

}while(confirm('seguir?'))

document.writeln(`los numeritos ingresados son ${sumaNum}`)