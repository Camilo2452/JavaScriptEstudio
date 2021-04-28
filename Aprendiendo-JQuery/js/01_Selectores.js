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
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var cam = $(this);
        if( cam.hasClass('grande')){
            cam.removeClass('grande');
        }else{
            cam.removeClass('grande');
        }
    });
    //Selectores de Atributos

    $('[title=Google]').css('background', "#ccc");
    $('[title=Facebook]').css('background', 'blue');

    //Otros
    //$('p, a').addClass('margen-superior');
    //var busqueda = $("#caja").find('.resultado');
    var busqueda = $("#caja .resultado").eq(0).parent().parent().find('[title="Google"]');

    console.log(busqueda);
});   