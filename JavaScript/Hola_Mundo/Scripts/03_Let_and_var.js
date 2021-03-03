//Usamos esta consicion ya que los nuevos estandares de programacion la requiere    
'use strict'


var numero = 40;
let number = 666;
alert(numero);
//Prueba Alert con Var

//Definimos un if el cual tome nuestra condicion
if(true){
    var numero = 50;
}
alert(numero); 
// Cabe notar que las variables


//Uso de Let
var desc = "Hola a todo mundo";

if(true){
    //Solo se puede modificar en bloque
    let desc = "Los adoro cositas";
    console.log(desc);
}
console.log(desc);
