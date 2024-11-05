//var tasca = prompt('tasca?');
//creem element jquery
//var jquery_elem = $('<li>'+tasca+'</li>');
//l'afegim a una llista de la nostra pagina
//$('ul').append(jquery_elem);


$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false, 
        icons: null
     });

    dialog = $( "#dialog" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        "Afegir tasca": addElem,
        Cancelar: function(){
            $("#textTasca").val("");
            $(this).dialog("close");
        }
    },
});
    //botón afegir tasca
    $( "#afegirTasca" ).button().on( "click", function() {
        dialog.dialog("open");
    });

    accordionButtons();
});

// function addElem(){
//     $("#llista").append("<li>"+$("#textTasca").val()+"</li>");
//     $("#textTasca").val("");
//     $(this).dialog("close");
// }

function addElem(){
    $("#accordion").append("<h3>"+$("#textTasca").val()+'</h3><div><input type="text" class="editTasca"></input><button class="editButton">Editar</button><button class="deleteButton">Borrar</button></div>');
    accordionButtons();    
    $("#accordion").accordion("refresh");
    $("#textTasca").val("");
    $(this).dialog("close");
}

function accordionButtons(){
        //añadir el texto de la tasca al input
        $(".editTasca").each(function() {
            $(this).val($(this).parent().prev().text());
        });
    
        //boton editar
        $(".editButton").button().on("click", function(){       
            $(this).parent().prev().text($(this).prev().val());
        });
    
        //boton borrar
        $(".deleteButton").button().on("click", function(){
            $(this).parent().prev().remove();
            $(this).parent().remove();
        });
}
