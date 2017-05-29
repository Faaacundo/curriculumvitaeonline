$(function() {
    var ink, d, x, y;
    $(".ripple").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate");
        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });
});

//TERRIBLE FUNCION ME TOMA EL SCROLL

//   $(function(){
//        $("#detectascroll").on("click", function () {
//            //scroll vertical
//            var sv = $(document).scrollTop();
//            //scroll horizontal
//            var sh = $(document).scrollLeft();
//            console.log("El scroll es: Vertical->", sv, " Horizontal->" , sh);
//            $(this).find("span").text("(" + sh + "," + sv+ ")");
//        });
//        $("#scrollelemento").on("click", function () {
//            var boton = $(this);
//            var elemento = boton.parent();
//            //scroll vertical
//            var sv = elemento.scrollTop();
//            //scroll horizontal
//            var sh = elemento.scrollLeft();
//            console.log("El scroll del elemento es: Vertical->", sv, " Horizontal->" , sh);
//            boton.find("span").text("(" + sh + "," + sv+ ")");
//        });
//        $("#animarscroll").on("click", function(){
//            var posicion = $("#hastaaqui").offset().top;
//            $("html, body").animate({
//                scrollTop: posicion
//            }, 2000); 
//        });
//        $(document).on("scroll", function(){
//            var desplazamientoActual = $(document).scrollTop();
//            var controlArriba = $("#irarriba");
//            console.log("Estoy en " , desplazamientoActual); 
//            if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
//                controlArriba.fadeIn(500);
//            }
//            if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
//                controlArriba.fadeOut(500);
//            }
//        });
//        $("#irarriba a").on("click", function(e){
//            e.preventDefault();
//            $("html, body").animate({
//                scrollTop: 0
//            }, 1000); 
//        });
//    });


// ESTO HACE QUE EL SCROLL SEA LENTO AL SELECCIONAR LAS SECCIONES DEL CV
$(document).ready(function(){
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top +=40 }, 'slow');

    });
});

$(document).on('scroll', function() {
    
  var se1 = $('#sobre-mi').position().top;
  var se2 = $('#estudios').position().top;
  var se3 = $('#empleos').position().top;
  var se4 = $('#hobbies').position().top;

  
// esto funcionaAAA NO TOCAR PO AS DUDAS
// if($(this).scrollTop() >= se1){
//       $("div a.ripple").addClass("grey"); 
//    }
//  else{
//    $("div a.ripple").removeClass("grey");
//  };
    
      if($(this).scrollTop() >= se1){
       $("a.fboton").addClass("grey"); 
    }
  else{
    $("a.fboton").removeClass("grey");
  };
    
  
  
  if($(this).scrollTop() >= se2){
       $("a.tboton").addClass("grey"); 
      
       $("a.fboton").removeClass("grey");
    }
  else{
    $("a.tboton").removeClass("grey");
  };
  
 
  
  
  if($(this).scrollTop() >= se3){
       $("nav").addClass("bg-3"); 
       $("nav").removeClass("bg-2");
    }
  else{
    $("nav").removeClass("bg-3");
  };
  
  
  if($(this).scrollTop() >= se4){
       $("nav").addClass("bg-4"); 
       $("nav").removeClass("bg-3");
    }
  else{
    $("nav").removeClass("bg-4");
  };
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: [
            "Soy una persona con muchos intereses y gustos diferentes. Estoy terminando la secundaria y tengo ganas de trabajar en un lugar donde pueda aprender y crecer como profesional. Siento que podría integrarme en un equipo de trabajo y soy muy responsable en las tareas que me corresponden. <br> Creo que la programación es una herramienta muy necesaria para desarrollarse en la sociedad hoy y es un espacio donde creo que podría aportar, además de seguir aprendiendo."],
        typeSpeed: 0
      });
  });

$(".element").ready(function(){
    

        setTimeout(function(){ 
            $(".texto").append("<div class='firma'><img class='firmita' src='2.svg' alt=''><p class='aclaracion'>Orlando, Facundo Nicolás</p></div>");
            $('.aclaracion').hide();
            $('.aclaracion').fadeIn(5000);
        }, 17800);
    
 });
