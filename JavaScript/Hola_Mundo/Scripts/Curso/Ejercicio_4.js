'use strict'
/**
 * Introsuce todos los numeros impares que hay entre dos numeros ingresados por el usuario
 * */ 
var Numero1 = parseInt(prompt("Introduce el primer numero",0));
var Numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(Numero1 < Numero2){
    Numero1++;

    if(Numero1%2 !=0){
        alert("El "+Numero1 +" Es Impar");
    }
}