'use strict'

/*
Calculadora:
DOs numeros por pantalla
Validcion nuemeros
Impimir la pagina, en una alaerta y en la consola mostrar 
*/

var Numero1 = parseInt(prompt("Introduce el primer numero",0));
var Numero2 = parseInt(prompt("Introduce el segundo numero",0));

while (Numero1 < 0 || Numero2 < 0 ||isNaN(Numero1)||isNaN(Numero2)){
     Numero1 = parseInt(prompt("Introduce el primer numero",0));
     Numero2 = parseInt(prompt("Introduce el segundo numero",0));

     }     
     
    var resultado = "La suma es: "+(Numero1 + Numero2)+"<br/>"+
                    "La resta es: "+(Numero1 - Numero2)+"<br/>"+
                    "La division es: "+(Numero1 / Numero2)+"<br/>"+
                    "La multiplicacion es: "+(Numero1 * Numero2)+"<br/>";

    var resultado1 = "La suma es: "+(Numero1 + Numero2)+"\n"+
                    "La resta es: "+(Numero1 - Numero2)+"\n"+
                    "La division es: "+(Numero1 / Numero2)+"\n"+
                    "La multiplicacion es: "+(Numero1 * Numero2)+"\n";
document.write(resultado);
//alert(resultado1);
console.log(resultado1);