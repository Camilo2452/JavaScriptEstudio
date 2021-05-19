$(document).ready(function(){
    //alert("evento cargado");
    var caja = $("#caja");
    /*caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });
    */
    
    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaVerde(){
        $(this).css("background","green");
    }
   //Hover
    caja.hover(cambiaRojo, cambiaVerde);
    caja.click(function(){
        $(this).css("background","blue")
               .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","yellow")
               .css("color","red");
    });
});