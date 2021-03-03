'use strict'

/*
var numero1 = parseInt(prompt("Ingrese Un Numero", 0));
var numero2  = parseInt(prompt("Ingrese Un Numero", 0));

while(isNaN(numero1)||isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingrese Un Numero", 0));
    var numero2  = parseInt(prompt("Ingrese Un Numero", 0));
}*/

function porConsola(numero1, numero2){
        console.log("Suma " + (numero1+numero2));
        console.log("Resta " + (numero1-numero2));
        console.log("Multiplicacion " + (numero1*numero2));
        console.log("Division " + (numero1/numero2));
        console.log("/********************************************/");
}

function porPantalla(numero1, numero2){
        document.write("Suma " + (numero1+numero2+"</br>"));
        document.write("Resta " + (numero1-numero2+"</br>"));
        document.write("Multiplicacion " + (numero1*numero2+"</br>"));
        document.write("Division " + (numero1/numero2+"</br>"));
        document.write("/********************************************/");
}

function calculadora(numero1, numero2, mostrar = false) {
    //console.log("Hola Soy la Calculadora");
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
    return true;
}


calculadora(1,4);
calculadora(2,5, false);
calculadora(4,5, true);
//var resultado = calculadora();

//console.log(resultado);

/**for(var i = 1; i <= 10; i++){
    console.log("Del Numero ", i);
    calculadora(i, 8);
}
*/