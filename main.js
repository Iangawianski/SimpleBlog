//INICIALIZAR
$("#textos").hide();
$("#imagenes").hide();
$("#containerPrincipal").hide();
// $("#bio").hide();
$("#musica").hide();

$(":button").click(function() {
    $("#body").removeClass("body"); 
});

//TEXTOS
$("#btnTextos").click(function(){
	$("#imagenes:visible").hide();
	$("#bio:visible").hide();
	$("#musica:visible").hide();
    $("#textos").slideToggle();
    $("body").scrollTop(635);
});

//CONTAINER CON TEXTOS
$("#texto1").click(function(){
	$("#containerPrincipal").show();
    $("#containerPrincipal").load("textos/texto1.html");
    $("body").scrollTop(1300);
});
$("#texto2").click(function(){
	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto2.html");
	$("body").scrollTop(1300);
});
$("#texto3").click(function(){

	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto3.html");
	$("body").scrollTop(1300);
});
$("#texto4").click(function(){
	$("#containerPrincipal").show();
    $("#containerPrincipal").load("textos/texto4.html");
    $("body").scrollTop(1300);
});
$("#texto5").click(function(){
	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto5.html");
	$("body").scrollTop(1300);
});
$("#texto6").click(function(){
	$("#containerPrincipal").show();
	$("#containerPrincipal").load("textos/texto6.html");
	$("body").scrollTop(1300);
});

//IMAGENES
$("#btnImagenes").click(function() {
	$("#textos:visible").hide();
	$("#musica:visible").hide();
	$("#bio:visible").hide();
	$("#imagenes").slideToggle();
	$("body").scrollTop(635);
})

//MUSICA
$("#btnMusica").click(function() {
	$("#textos:visible").hide();
	$("#bio:visible").hide();
	$("#imagenes:visible").hide();
	$("#musica").show();
	$("body").scrollTop(635);
})

//BIO 
$("#btnBio").click(function() {
	$("#textos:visible").hide();
	$("#imagenes:visible").hide();
	$("#musica:visible").hide();
	$("#bio").slideToggle();
	$("body").scrollTop(635);
})

