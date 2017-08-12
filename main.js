//INICIALIZAR
$("#columnaDeTextos").hide();

//BOTON TEXTOS
$("#textos").click(function(){
    $("#columnaDeTextos").slideToggle();
    $("body").scrollTop(605);
});

//TEXTOS
$("#texto1").click(function(){
    $("#containerPrincipal").load("textos/texto1.html");
});
$("#texto2").click(function(){
	$("#containerPrincipal").load("textos/texto2.html");
});
$("#texto3").click(function(){
	$("#containerPrincipal").load("textos/texto3.html");
});
// //ABOUT
// $("#containerAbout").hide();
// $("#containerAbout").toggle().load("about.html");

//close about
$("#close").click(function() {
	$("#containerAbout").hide();
	$("#containerPrincipal").removeClass("col-md-7");
	$("#containerPrincipal").addClass("col-md-10");
})

