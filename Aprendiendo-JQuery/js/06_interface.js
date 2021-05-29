$(document).ready(function(){
    var elemento = $(".elemento");
    var lista_li = $(".lista-seleccionable");
    /*************/
    var elemento_movido = $("#elemento-movido");
    var area            = $("#area");
    var mostrar         = $("#mostrar");
    var caja_efecto     = $(".caja-efecto");
    var popup           = $("#popup");
    var lanzar_popup    = $("#lanzar-popup");
    var calendario      = $("#calendario");
    var tabs            = $("#pestanas");
    //Mover Elemento por la Pagina
    elemento.draggable();

     //Mover Elemento por la Pagina
     elemento.resizable();
    
     //Seleccionar
     lista_li.selectable();

     //Organizar
    /**  lista_li.sortable({
         update: function(event,ui){
             console.log("Ha cambiado la lista");
         }
     });
*/
     //Drop
     elemento_movido.draggable();
     area.droppable({
        drop:function(){
            console.log("Has Soltado Algo Dentro del Area");
        }
     });

     //Efectos
     mostrar.click(function(){
        caja_efecto.effect("shake",4000);
        //fadeToggle
        //efect("fade")
        //explode
        //blind
        //slide
        //drop
        //fold
        //puff
     });
     //Tooltip
     $(document).tooltip();

     //Dialog
     lanzar_popup.click(function(){
        popup.dialog();
     });
    
     //DatePicker
     calendario.datepicker();
     
     //tabs
     tabs.tabs();
});