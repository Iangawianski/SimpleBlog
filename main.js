//INICIALIZAR
$("#textos").hide();
$("#imagenes").hide();
$("#containerPrincipal").hide();

//BOTON TEXTOS
$("#btnTextos").click(function(){
	$("#imagenes:visible").hide();
    $("#textos").slideToggle();
    $("body").scrollTop(605);
});

//TEXTOS
$("#texto1").click(function(){
	$("#containerPrincipal").show();
    $("#containerPrincipal").load("textos/texto1.html");
});
$("#texto2").click(function(){
	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto2.html");
});
$("#texto3").click(function(){
	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto3.html");
});
;

//IMAGENES
$("#btnImagenes").click(function() {
	$("#textos:visible").hide();
	$("#imagenes").slideToggle();
	$("body").scrollTop(605);
})



//about
$("#closedAbout").hide();

$("#close").click(function() {
	$("#columnaContainerAbout").hide();
	$(".columnaPrincipal").removeClass("col-md-8");
	$(".columnaPrincipal").addClass("col-md-11");
	$("#closedAbout").show();
})

$("#showAbout").click(function() {
	$("#columnaContainerAbout").show();
	$("#closedAbout").hide();
	$(".columnaPrincipal").removeClass("col-md-11");
	$(".columnaPrincipal").addClass("col-md-8");
});