'use strict'
//Condicional IF
 var edad = 55;
 var nombre = 'Alberto Moreno';

 //Operadores Logicos:

/*
 Mayor : >
 Menor : <
 Mayor o Igual : >=
 Menor o Igual : <=
 Igual: ==
 Distinto: !=
*/
if(edad >= 18){
	//alert('Mayor de Edad');
	console.log(nombre + " tiene " + edad + " es mayor de edad" );

	if(edad <= 33){
		console.log("Todavia eres Millenial");
	}else if(edad >= 56){
		console.log("Sos un anciano pelotudo");
	}else{
		console.log("Este compa ya esta muerto, no mas no le han avisado.");
	}

}else{
	console.log(nombre + " tiene " + edad + " es menor de edad" );
}
/*Operadores logicos

AND(Y) : &&
OR(O)  : ||
NEGACION : !
*/
var year = 2019;

if (year != 2016) {
	console.log("El año no es 2016 el año es: " + year );
}

if(year >= 2000 && year <= 2020 && year !=2018){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos fuera de la era actual");
}

if (year == 2008 || (year >= 2018 &&  year ==2028)) {
	console.log("El año acaba en 8");
}else{
	console.log("Año no registrado");
}