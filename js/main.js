$(document).ready(function(){
    $('img[usemap]').rwdImageMaps();
   // Verifica quanto pontos existem na estrutura do HTML e monta na página 
   	var pontos = $("#fluxo").find('[class*="points"]');
   

    
   // Não usar id's nos seletores 	
	$(".hvr-grow").hover(function(){
    $("#clique-dica").css("opacity","1");
    var elementID = $(this).closest('div').attr('id'); 
	var elementIDFinal = elementID.substring(5, 6);
	var newSrc = 'imgs/bg'+elementIDFinal+'.png';
	$(this).attr("src", "imgs/circle_hover.png");
	$(this).next().show();
    	$(this).next().addClass('animated slideInUp');
	$("#bg-img").attr("src", newSrc);
	$("#bg-img").css("opacity", "0.2");
	//$(".labels").css("opacity", "0");
	//$(".numeros").css("opacity", "0");
	$(".labels").hide();
	});

	
	$(".hvr-grow").mouseout(function(){
		$("#bg-img").css("opacity", "1");
		$("#clique-dica").css("opacity","0");

	});


	$(".hvr-grow").mouseleave(function(){
	$("#clique-dica").css("opacity","0");
	$(this).attr("src", "imgs/circle.png");
	$(this).next().fadeOut('fast');
	
	$("#bg-img").css("opacity", "0");
	$("#bg-img").attr("src", "imgs/bg0.png");
	$(".labels").show();
	//$(".numeros").css("opacity", "1");
	$("#clique-dica").css("opacity","0");
	});

   $(".hvr-grow").click(function(){
  
    setTimeout(function(){ $("#bg-img").css("opacity", "1"); }, 100);
   	$(".hvr-grow").attr("src", "imgs/circle.png");

   	 $("#line").css("opacity", '0');
   $(".hvr-grow").off('mouseleave'); // MÉTODO OFF

  
	var elementID = $(this).closest('div').attr('id'); 
	var elementIDFinal = elementID.substring(5, 7);
	var newSrc = 'imgs/bg'+elementIDFinal+'.png';
    var conteudoSelecionado = '#ctn-fluxo-'+elementIDFinal;
    var overlaySelecionado = '#overlay'+elementIDFinal;
	$(conteudoSelecionado).show();
    $(conteudoSelecionado).addClass("animated slideInLeft");

	$("#bg-img").css("opacity", "1.0");
	$("#bg-img").attr("src", newSrc);
	/*$(".hvr-grow").unbind();*/
    $(".numeros").css("opacity", "0");
	$(".hvr-grow").fadeOut();
	$(".text-hover").fadeOut();
	$("#clique-dica").css("opacity","0");
	$(overlaySelecionado).fadeIn();
	$(overlaySelecionado).addClass('animated fadeInUp');
	$("#overlay-black").css("cursor","url('imgs/close.png'), auto");
	$("#overlay-black").css("display", "inline");
	$(".labels").hide();
	$(".numeros").css("opacity", "0"); 

	});



 $("#overlay-black").click(function(){
 	$(".ctns").fadeOut();
 	$("#clique-dica").css("opacity","0");
  $("#overlay-black").css("display", "none");
  $("#bg-img").attr("src", "imgs/bg0.png");	
 $("#line").css("opacity", '1');
 
  $(".numeros").css("opacity", "1");
 $(".hvr-grow").show();
 $(".hvr-grow").css('opacity','1');
 $(".hvr-grow").on('mouseleave');
 $(".labels").show();
	$(".numeros").css("opacity", "1");

 //$(".text-hover").css('opacity', '0');
 $(".text-overlay").css('display', 'none');

// Replica - melhorar
$(".hvr-grow").hover(function(){
     $(".hvr-grow").on('mouseleave');
    var elementID = $(this).closest('div').attr('id'); 
	var elementIDFinal = elementID.substring(5, 7);
	var newSrc = 'imgs/bg'+elementIDFinal+'.png';
		
	$(this).attr("src", "imgs/circle_hover.png");
	$(this).next().show();
    
	$(this).css("opacity", "1");
	$(this).next().addClass('animated slideInUp');
	$("#bg-img").attr("src", newSrc);
	$("#bg-img").css("opacity", "0.2");
	
	
	});

$(".hvr-grow").mouseleave(function(){
	$(this).attr("src", "imgs/circle.png");
	$(this).next().fadeOut('fast');
	$(".hvr-grow").css("opacity", "1");
	//$("#bg-img").css("opacity", "0");
	$("#bg-img").attr("src", "imgs/bg0.png");
	});
 		

 });


window.addEventListener('resize', function () { 
    "use strict";
    location.reload(); 
});


});

  
