$(document).ready(function(){
    var caja = $("#caja");
$("#mostar").show();    
    
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.slideDown('fast');
        //fadeIn -> Entrada 
        //faOut  -> Salida
        //fadeTo -> Parametro Chimbo
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostar").show();
        caja.slideUp('slow',function(){
            console.log('Animacion Finalizada');
        });
    });

    $("#todoenuno").click(function(){
        caja.slideUp('fast');
        //toggle
        //fadeToggle
    });

    $("#animame").click(function(){
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'120px'
        },'slow')
        .animate({
            borderRadius: '900px',
            marginLeft:'0px'
        },'slow')
        .animate({
            borderRadius: '100px',
            marginTop:'0px'
        },'slow')
        .animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'120px'
        },'slow')
        ;
    });
});