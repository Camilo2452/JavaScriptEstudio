'use strict'
//Transformacion de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "Es un buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toUpperCase();

//console.log(dato);

//Calcular Longitud 

var nombre = "Let's Rocket";
//var nombre = ["Hola","Hola"];

//console.log(nombre.length);

//Concatenar Unir Textos

//var textoTotal = texto1.concat(" "+texto2);
//console.log(textoTotal)

//var busqueda = texto1.indexOf("curso");
//var busqueda = texto1.search("curso");
//var busqueda = texto1.match(/curso/g);
//var busqueda = texto1.substr(14,5);
//var busqueda = texto1.charAt(44);
//var busqueda = texto1.startsWith("JavaScript");
//var busqueda = texto1.endsWith("Robles");
//var busqueda = texto1.includes("Victor");


/*********REMPLAZAR TEXTOS****************** */
//var busqueda = texto1.replace("Bienvenido","A Mimir");
//var busqueda = texto1.slice(14, 22);//Recortar
//var busqueda = texto1.split("  ");//Array
var busqueda = texto1.trim();
console.log(busqueda);

