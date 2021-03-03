'use strict'
// Eventos
// Eventos del Raton

//Evento Load

window.addEventListener('load',()=> {
    
//Otra Manera
//window.addEventListener('load',function()

    function cambiarColor(){
   
        var bg = boton.style.background;
       
          if(bg=="green"){
                boton.style.background="red";
                
            }else{
                boton.style.background="green";
            }
    
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
            return true;
    }
    
    var boton = document.querySelector('#boton');
    
    //Click
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black";
    });
    
    //Mouse Over
    
    boton.addEventListener('mouseover',function(){
        boton.style.background = 'red';
    });
    
    //MouseOut
    
    boton.addEventListener('mouseout',function(){
        boton.style.background = 'yellow';
        this.style.border = "20px solid red"
    });
    
    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus',function(){
        console.log("Estas Dentro del Input");
    });
    //Blur
    
    input.addEventListener('blur',function(){
        console.log("Estas Fuera del Input");
    });
    
    //Keydown
    
    input.addEventListener('keydown',function(event){
        console.log("KeyDown Estas Pulsando la letra", String.fromCharCode(event.keyCode));
    });
    //Keypress
    
    input.addEventListener('keypress',function(event){
        console.log("KeyPress Estas Pulsando la letra", String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keyup',function(event){
        console.log("Tecla Soltada", String.fromCharCode(event.keyCode));
    });

});


