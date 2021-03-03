'use strict'

window.addEventListener('load',function(){
    console.log("DOM Cargado");

    var formulario = document.querySelector("#Formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit',function(){
        console.log("Evento Capturado");

        var nombre   = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad     = parseInt(document.querySelector("#edad").value);
        

        if(nombre.trim()== null || nombre.trim().length == 0){
            alert("Este Nombre no es Valido");
            document.querySelector("#error_nombre").innerHTML = 'Esto no es valido';
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = 'none';
        }

        if(apellido.trim()== null || apellido.trim().length == 0){
            alert("Este Apellido no es Valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("Esta Edad no es Valida");
            return false;
        }
        

        box_dashed.style.display = "block";

        ///console.log(nombre, apellido, edad);

        var p_nombre     = document.querySelector("#p_nombre span");
        var p_apellidos  = document.querySelector("#p_apellidos span");
        var p_edad       = document.querySelector("#p_edad span");
        
        p_nombre.innerHTML      = nombre;
        p_apellidos.innerHTML   = apellido;
        p_edad.innerHTML        = edad;
        /**
        var datos_usuario = [nombre, apellido, edad];
        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
       **/

        
        //return false;
    });
});