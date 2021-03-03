'use strict'

//console.log("switch");

var edad = 40;
var imprime = "";
switch(edad){
	case 18:
		imprime = "Acabas de Cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;		
	case 40:
		imprime = "Crisis de los 40";
	break;
	case 75:
		imprime = " Mas bien, Viejita";
	break;
		default:
			imprime = "Edad Neutral";
		break;	
	}

	console.log(imprime);