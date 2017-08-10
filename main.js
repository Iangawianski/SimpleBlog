//INICIALIZAR
$("#columnaDeTextos").hide();

//BOTON TEXTOS
$("#textos").click(function(){
    $("#columnaDeTextos").slideToggle();
    $("body").scrollTop(305);
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
//ABOUT
$("#containerAbout").hide();
$("#containerAbout").toggle().load("about.html");
$("#about").click(function(){
	$("#containerAbout").toggle().load("about.html");
});