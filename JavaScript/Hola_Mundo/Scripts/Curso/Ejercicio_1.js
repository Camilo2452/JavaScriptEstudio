'use strict'

/*
Programa que pida dos numeros y que pida cual es mayor, el menor y si son iguales
Plus: Validar que la entrada que estos numeros sean validos o iguales o menores a 0 
*/

var numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numero', 0));

/*console.log(numero1, numero2);
*/


while(numero1 <=0 || numero2 <=0 || isNaN(numero2) || isNaN(numero1)){
    var numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
    var numero2 = parseInt(prompt('Introduce el Segundo Numero', 0));
}

if(numero1 == numero2){
    alert("Los Numeros son Iguales");
}else if(numero1 > numero2){
    alert("El Numero Mayor es :" +numero1);
    alert("El Numero Menor es :" +numero2);

}else if (numero1 < numero2){
    alert("El Numero Mayor es : " + numero2);
    alert("El Numero Menor es : " + numero1);
}else{
    alert("Introdusca Un numero Valido")
}
