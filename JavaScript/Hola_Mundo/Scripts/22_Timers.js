'use strict'
//Timers

window.addEventListener('load',function(){
  
function intervalo(){
        ///setInterval
        var tiempo = setInterval(function(){
            console.log("Set Interval Ejecutado")
            
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "80px"){
                encabezado.style.fontSize == "70px";
            }else{
                encabezado.style.fontSize == "80px";
            }
    
    
        }, 500);
        return tiempo;
}   
    var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener("click",function(){
        alert("Has Parado el Intervalo en Bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click",function(){
        alert("Has Iniciado el Intervalo en Bucle");
        intervalo();
    });
});