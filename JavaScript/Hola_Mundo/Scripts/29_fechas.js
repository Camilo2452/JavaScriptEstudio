var fecha = new Date();

var year    = fecha.getFullYear();
var mouth   = fecha.getMonth();
var day     = fecha.getDay();
var hour    = fecha.getHours();

var textoHora = 
`El año es: ${year}
El mes es: ${mouth}
El dia es : ${day}
La hora es: ${hour}
`
;

console.log(textoHora);
console.log(Math.random()*10);

/*****https://www.w3schools.com/js/js_math.asp */