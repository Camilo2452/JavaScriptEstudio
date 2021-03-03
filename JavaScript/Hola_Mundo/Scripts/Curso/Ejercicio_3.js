'use strict'
// Operadores:

var Numero1 = parseInt(prompt("Introduce el primer numero",0));
var Numero2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De "+Numero1+" a "+Numero2+" Estan estos numeros: </h1>");
for(var i = Numero1; i <= Numero2; i++){
    document.write(i +"<br/>");
}