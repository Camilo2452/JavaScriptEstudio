'use strict'
//Parametros REST  Y SPREAD

function ListadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas);
}
ListadoFrutas("Naranja", "Manzana","Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
ListadoFrutas( ...frutas,"Sandia", "Pera", "Melon", "Coco");