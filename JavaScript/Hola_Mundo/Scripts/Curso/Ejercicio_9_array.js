'use strict'

/**
 * 1) Solicitar 6 numeros por pantalla y los meta en un array
 * 2) Mostrar el array entero (todo sus elementos) en el cuerpo de la pagina y en la consola
 * 3) Ordenarlo y Mostrarlo
 * 4) Invertir su orden y mostrarlo
 * 5) Mostrar uanros elementos tiene el array
 * 6) Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (Se valorara el uso de funciones) 
 */

 /*******PRIMER EJERCICIO********/
function mostrarElemento(elementos, textoJusto=''){
    //Mostrar en el html
    document.write("<h1>Este es el Array"+textoJusto+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, i)=>{
        document.write("<li>"+ elemento +"</li><br/>");
    });
    document.write("</ul>")
}

 //var numeros = new Array(6);
   var numeros = []; 
    for(var i = 0; i <= 5; i++){
        //numeros[i]= parseInt(prompt("Introduce Un Numero",0));
        numeros.push(parseInt(prompt("Introduce Un Numero",0)));    
    }
    //Mostrar en la con consola
    console.log(numeros);
    mostrarElemento(numeros);

    //Ordenar y Mostrar
    numeros.sort(function(a,b){return a-b});
    //console.log(numeros)
    mostrarElemento(numeros,'PutoQueLoLea');

    numeros.reverse();
    mostrarElemento(numeros,'Reverso');
    
    //Contar Elementos
    document.write("<h1> El arreglo tiene "+numeros.length+" Elementos <h1>");

    //Busqueda

    var busqueda = parseInt(prompt("Busca Un Numero",0));
    var buscado = numeros.findIndex(numero => numero == busqueda);

    if(buscado && buscado != -1){
        document.write("<h1>Encontrado</h1>");
        document.write("<h2>Se encuentra en:"+ buscado +"</h2>");
    }else{
        document.write("<h2>404 Not Found</h2>");
    }