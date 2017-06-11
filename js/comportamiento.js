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
            "Soy una persona con muchos intereses y gustos diferentes. Terminé la secundaria y tengo ganas de trabajar en un lugar donde pueda aprender y crecer como profesional. Siento poder integrarme en un equipo de trabajo y soy muy responsable en las tareas que me corresponden. <br> Creo que la programación es una herramienta muy necesaria para desarrollarse en la sociedad hoy y es un espacio donde creo que podría aportar, además de seguir aprendiendo."],
        typeSpeed: 0
      });
  });

$(".element").ready(function(){


        setTimeout(function(){
            $(".texto").append("<div class='firma'><img class='firmaDibujo' src='firma.svg' alt=''><p class='aclaracion'><br>Orlando, Facundo Nicolás</p></div>");
            $('.aclaracion').hide();
            $('.aclaracion').fadeIn(2000);
            $('.aclaracion').css({
                        borderTop:"1px solid #434343",
                        position: "relative",
                        top:"-78px",
                        right:"10px"
            });
        }, 18100);

 });


// FORMULARIOOOOOOOOOOOOOOOOO

//VERIFICAR VARIABLES MEDIAS RARAS DEL VAL AVER IS SE PUEDE SIMPLIFICAR
(function() {

$(document).ready(function(){
    var val = $('#nombre').val(); // Toma el valor del Input

    $('#nombre').focus(function(){
         var val = $('#nombre').val();

            $(this).removeClass('error');
            $('.form-item .label').removeClass('error');
    });

    $('#nombre').blur(function(){
         var val = $('#nombre').val();

        if(val.length<1){
            $(this).addClass('error');
             $('.nombre').addClass('error');
        }
    });
});

}())




// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function() {

  var formulario = document.formulario_registro,
    elementos = formulario.elements;

  // Funcion que se ejecuta cuando el evento click es activado

  var validarInputs = function() {
    for (var i = 0; i < elementos.length; i++) {
      // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
        // Si es tipo texto, email o password vamos a comprobar que esten completados los input
        if (elementos[i].value.length == 0) {
          console.log('El campo ' + elementos[i].name + ' esta incompleto');
          elementos[i].className = elementos[i].className + " error";
          return false;
        } else {
          elementos[i].className = elementos[i].className.replace(" error", "");
        }
      }
    }

    // Comprobando que las contraseñas coincidan
    if (elementos.pass.value !== elementos.pass2.value) {
      elementos.pass.value = "";
      elementos.pass2.value = "";
      elementos.pass.className = elementos.pass.className + " error";
      elementos.pass2.className = elementos.pass2.className + " error";
    } else {
      elementos.pass.className = elementos.pass.className.replace(" error", "");
      elementos.pass2.className = elementos.pass2.className.replace(" error", "");
    }

    return true;
  };

  var validarRadios = function() {
    var opciones = document.getElementsByName('sexo'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
        // Recorremos los radio button
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo sexo esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del radio button
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };

  var validarCheckbox = function() {
    var opciones = document.getElementsByName('terminos'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "checkbox") {
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo checkbox esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del checkbox
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };

  var enviar = function(e) {
    if (!validarInputs()) {
      console.log('Falto validar los Input');
      e.preventDefault();
    } else if (!validarRadios()) {
      console.log('Falto validar los Radio Button');
      e.preventDefault();
    } else if (!validarCheckbox()) {
      console.log('Falto validar Checkbox');
      e.preventDefault();
    } else {
      console.log('Envia');
      e.preventDefault();
    }
  };

  var focusInput = function() {
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  var blurInput = function() {
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };

  // --- Eventos ---
  formulario.addEventListener("submit", enviar);

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
      elementos[i].addEventListener("focus", focusInput);
      elementos[i].addEventListener("blur", blurInput);
    }
  }

}())
