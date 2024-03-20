'use strict'

var parms = process.argv.slice(2);

var numero1 = parseFloat(parms[0]);
var numero2 = parseFloat(parms[1]);
var numero3 = parseFloat(parms[2]);


var plantilla =`
la Suma es: ${numero1 +numero2}
la Resta es: ${numero1 -numero2}
la Division es: ${numero1 /numero2}
la Multiplicacion es: ${numero1 *numero2}
`;

console.log(plantilla);
//console.log('Hola Mundo con Node JS');



//Alt 96