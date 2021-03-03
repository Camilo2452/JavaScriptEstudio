'use strict'

//Conseguir Elementos con su ID

//Document Object Model

//var caja =  document.getElementById("MiCaja");

var caja = document.querySelector('#MiCaja');

caja.innerHTML= 'Texto re Fachero en Json';
caja.style.background = 'blue';
caja.style.color = 'red';
caja.style.padding = '5%';
caja.className = 'HolaPapu';

//console.log(caja)

//Consegir todos los elementos por sus etiquetas

var TodoslosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');
seccion.prepend(hr);
//No se puede usar foreach
var valor;

for(valor in TodoslosDivs){
//forEach(valor, i => {
    if(typeof TodoslosDivs[valor].textContent == 'string'){

    
    var parrafo = document.createElement("p");
    var texto   = document.createTextNode(TodoslosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector('#miseccion').prepend(parrafo);
//});
}
}

/*** 
var contenidoEnTexto = TodoslosDivs[3];
contenidoEnTexto.innerHTML = "Se Modifica Tercer Elemento";
contenidoEnTexto.style.background = "red";
contenidoEnTexto.style.padding = "8%";
console.log(contenidoEnTexto);
*/

/*
 var dev = parseInt(prompt('Ingrese un Color \n 1 Rojo \n 2 Verde'));

 if  (dev = 1) {
    CambiarColor('red');
} else if (dev = 2) {
    CambiarColor('blue');
}else {
    document.write = '<h1>Ingrese Algo Mkn</h1>'
}*/



/**function CambiarColor(color){
    caja.style.background = color;
}**/

//Consegir elementos por clase css
var divsRojos       = document.getElementsByClassName('rojo');
var divsAmarillo    = document.getElementsByClassName('amarillo');

divsAmarillo[0].style.background = 'yellow';
//console.log(divsAmarillo);

for(var div in divsRojos){
    if(divsRojos[div].className == 'rojo'){
        divsRojos[div].style.background = 'green';
    } 
}
//divsRojos[0].style.background = 'red';
//divsRojos[1].style.background = 'orange';
//console.log(divsRojos);

//Query Selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
