'use strict'

//LocalStorage

if(typeof(Storage)!== 'undefinded'){
    console.log("LocalStorange fine");
}else{
    console.log("No funciona");
    }
localStorage.setItem("titulo","Curso de Php Re makio");
localStorage.setItem("Subtitulo","Sos Re Puto");

//Recuperar elementos

//console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos

var usuario = {
    nombre: "Victor Robles",
    email: "camilocool352@gmail.com"
}
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto

var userj = JSON.parse(localStorage.getItem("usuario"));

console.log(userj);
document.querySelector("#datos").append(" "+userj.web+" - "+userj.nombre);
localStorage.removeItem("usuario");
localStorage.clear;