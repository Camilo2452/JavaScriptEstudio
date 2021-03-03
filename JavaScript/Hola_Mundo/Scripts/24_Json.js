'use strict'

//JSON JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2020,
    pais: 'EEUU'
}

var peliculas =[ {
    titulo: 'Moun Amour',
    year: 2001,
    pais: 'Francia'},
    pelicula
];
//pelicula.pais = 'Sonic El JesheJojo';
//console.log(pelicula);
var caja_peliculas = document.querySelector('#peliculas');
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+ " - "+peliculas[index].year);
    caja_peliculas.append(p);
}