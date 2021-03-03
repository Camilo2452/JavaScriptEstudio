'use strict'

/*
Numero Par o Impar

1. Ventana Numero
2. Si no es valido vollver a pedir
*/

var number = parseInt(prompt('Ingresa Un Numero', 0));

while(isNaN(number)){
    number = parseInt(prompt('Ingresa Un Numero',0));
}

if(number %2 == 0){
    alert("Es un Numero Par");
}else{
    alert("Es un Numero InPar");
}