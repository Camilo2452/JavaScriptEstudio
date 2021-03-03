'use strict'
 //Array, Arreglos, Matrices

 var nombre = "Camilo Rozo";
 var nombres = ["Victor Robles", "Diego Lopez","Manolo Lama", "Camilo Rozo", 20, true ];

 var lenguajes = new Array("Php", "JS", "GO", "Java","Pyhton","Django");
 //console.log(nombres.length);
/** 
 var elemento = parseInt(prompt("Que elemento del array quieres??",0));
if(elemento >= nombres.length){
    alert("Ingrese un numero menor que "+nombres.length)
}else{ alert("El Usuario seleccionado es "+nombres[elemento]);
}
 */

 document.write("<h1>Lenguajes de Programacion del 2018</h1>");
 document.write("<ul>")
 /** 
 for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")

 }
 
lenguajes.forEach((elemento, indice, arreglo)=>{
    console.log(arreglo);
    document.write("<li>"+indice+ "-" +elemento+"</li>")
});
 document.write("</ul>")
 */

 for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
 }
 document.write("</ul>")

 // Busqueda
/*
 var busqueda = lenguajes.find(function(lenguaje){
     return lenguaje == "Php";
 });

 console.log(busqueda);*/
 var precios = [10, 20, 50, 80];
// var busqueda = lenguajes.find(lenguaje => lenguaje =="Php");
 var busqueda = precios.some(precio => precio < 79);
 console.log(busqueda);
