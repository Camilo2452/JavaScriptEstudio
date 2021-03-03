'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas  = ['La Verdad Duele', 'La Vida es Bella', 'Gran Torino'];

//peliculas.sort();
peliculas.reverse();


console.log(peliculas);
var cine = [categorias, peliculas];
/** 
document.write("<ul>")

cine.forEach((element,contador)=>{
    document.write("<li>"+element[2]+"</li>");
});

document.write("</ul>");
*/
/* 
console.log(cine[0][1]);
console.log(cine[1][1]);
*/
/*
var elemento = "";

do{
    elemento = prompt("Introduce Tu Pelicula:");
    peliculas.push(elemento);
    }while(elemento != "ACABAR");
//console.log(peliculas);
peliculas.pop();
peliculas.pop();
peliculas.pop();

peliculas[0] = undefined;
console.log(peliculas);
**/

var indice = peliculas.indexOf('La Verdad Duele');
console.log(indice);
if(indice > -1){
    peliculas.splice(indice, 1);
}
var pelis_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);