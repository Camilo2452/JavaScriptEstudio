'use strict'

//Plantilla de Texto

var nombre = prompt("Inserta Tu Nombre");
var apellido = prompt("Inserta Tu Apellido");

var texto = `
<h1>Hola Que Tal</h1>
<h3>Mi Nombre es : ${nombre}</h3>
<h3>Mi Apellido es : ${apellido}</h3>
`;

document.write(texto);
