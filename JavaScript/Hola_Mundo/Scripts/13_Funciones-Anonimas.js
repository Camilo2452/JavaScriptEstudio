'use strict'

//Funciones Anonimas
//Funcion que no tiene nombre

/**var pelicula = function(nombre){
    return "La Pelicula es: "+nombre;
}**/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
        sumaYmuestra(sumar);
        sumaPorDos(sumar);
        return sumar;
}
sumame(6,10, dato =>{
    console.log("La suma es: ", dato);
},
dato =>{
    console.log("La suma por dos es",(dato*2));
});
/**sumame(6,10, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es",(dato*2));
});*/