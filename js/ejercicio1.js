// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const age = parseInt(prompt("Ingresa tu edad  "));

//verificar si el numero ingresado es valido
if (!isNaN(age)) {
    if (age >= 18) {
        document.writeln("Puedes conducir");
    }else{
        document.writeln("Aun eres pequeño para conducir");
    }
}else {
    alert("Introduce un numero válido");
}