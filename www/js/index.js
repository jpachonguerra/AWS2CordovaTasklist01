//var tasca = prompt('tasca?');
//creem element jquery
//var jquery_elem = $('<li>'+tasca+'</li>');
//l'afegim a una llista de la nostra pagina
//$('ul').append(jquery_elem);


$( function() {
    //$( "#accordion" ).accordion();

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

    $( "#afegirTasca" ).button().on( "click", function() {
        dialog.dialog("open");
    });

});

function addElem(){
    $("#llista").append("<li>"+$("#textTasca").val()+"</li>");
    $("#textTasca").val("");
    $(this).dialog("close");
}