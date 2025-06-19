/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
let edad = parseInt(prompt('Vamos a ver si puedes conducir! Dame tu edad!'));
let respuestas = document.querySelector('#respuestas');

if(!isNaN(edad)){
    if(edad>18){
        respuestas.textContent='Bien ahi! conduzca trancaa!'
    }else{respuestas.textContent='Sos un pibe! traiga ese carnet bichito de luz!'}

}else{ respuestas.textContent='No es un número válido maquinola'}