var nbtr = 10; //nb de tr
var nbtd = 10; //nb de td
$(document).ready(function(){ //lorsque la page est chargé
//Création tableau nbtr*nbtd
//tab est une variable qui "pointera" sur le tableau html pour le manipuler avec jQuery
tab = $("<table />", { //objet pour les attributs
css : { //attribut css
border: 'Transport 1px'
}
});
//on créé les tr
for(i=0;i<nbtr;i++){
//chaque tr doit être ajouté au tableau (variable tab)
tr = $('<tr />').appendTo(tab); //tr -> variable
//et pour chaque tr on créé les td
for(j=0;j<nbtd;j++){
//chaque td doit être ajouté au tr (variable tr)
td = $('<td />').appendTo(tr);
}
}
//on peut ajouter les tableau html à body...
tab.appendTo('section');
//mise en for css
$('td').css('background-color','#fdeecf');
$('tr:even td:even, tr:odd td:odd').css('background-color','#6e412e');
$('tr:even td:even, tr:odd td:odd').attr('class','sombre');


for (i=1;i<5;i++){
$('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='noir'  src='img/noir.png'>");
}
for (i=7;i<11;i++){
$('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='bois'  src='img/bois.png'>");
}

//mettre des valeurs croissantes
$('td').each(function(i){ //Explorer un objet-tableau jquery avec each
$(this).attr("id",i);
});


$(function(){
// appel du plugin
   $('.noir,.bois').draggable({
        revert : 'invalid', // l'élément est renvoyé à sa place s'il n'est pas déposé dans la bonne zone
       cursor : 'move', // on modifie le curseur pour faciliter la compréhension du visiteur
        snap : '.sombre',

});

$(".sombre").droppable({
    accept:'.bois,.noir'


});
});
//fin de la méthode ready
});


//
// //my//
$(function(){
  $("#rotate").click(function(){

    $("section").toggleClass("spinEffect");
  });
});
$(function(){
  $("#rotate1").click(function(){

    $("section").toggleClass("spinEffect");
  });
});
