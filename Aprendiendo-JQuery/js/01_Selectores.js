$(document).ready(function(){
    //Selector de ID

    $("#rojo").css("background","red");
    $("#amarillo").css("background","yellow")
                                 .css("color","red");
    $("#verde").css("background","green");

    

    //Selector de Clase
    var mi_clase = $('.zebra').css("padding","5px");
    console.log(mi_clase);

    mi_clase.css("border","5px dashed black");

    $('.sin_borde').click(function(){
        console.log("Click usado");
        $(this).addClass('zebra');
    });

    //Selectores de Etiqueta
    var parrafos = $('p');

    parrafos.click(function(){
        $(this).removeClass("zebra");
    });
});   