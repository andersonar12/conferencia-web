(function() {
	'use strict';

	var regalo = document.getElementById('regalo');
	document.addEventListener('DOMContentLoaded', function() {
		// body...

		//ampo datos de usuario
		var nombre = document.getElementById('nombre');
		var apellido = document.getElementById('apellido');
		var email = document.getElementById('email');

		//campos pases
		var pase_dia = document.getElementById('pase_dia');
		var pase_dosdias = document.getElementById('pase_dosdias');
		var pase_compleo = document.getElementById('pase_completo');

		//botones y divs
		var calcular = document.getElementById('calcular');
		var errorDIV = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var lista_productos = document.getElementById('lista-productos');
		var suma = document.getElementById('suma-total');

		//extras
		var camisas = document.getElementById('camisa_evento');
		var etiquetas = document.getElementById('etiquetas');



       if (document.getElementById('calcular')) {


		calcular.addEventListener('click', calcularMontos);

		function calcularMontos(event) {
			event.preventDefault();
			if (regalo.value === '') {
				alert('Debes elegir un regalo');
				regalo.focus();
			}else{
				//todo el codigo de calculos
				var boletosDia = parseInt(pase_dia.value, 10) || 0,
				    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
				    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
				    cantCamisas = parseInt(camisas.value, 10) || 0,
				    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;


				var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
				
				var listadoProductos = [];

				if (boletosDia >= 1) {
					listadoProductos.push(boletosDia + ' Pases por día');
				}
				if (boletos2Dias >= 1) {
					listadoProductos.push(boletos2Dias + ' Pases por 2 días');
				}
				if (boletoCompleto >= 1) {
					listadoProductos.push(boletoCompleto + ' Pases completos');
				}
				if (cantCamisas >= 1) {
					listadoProductos.push(cantCamisas + ' Camisas');
				}
				if (cantEtiquetas >= 1) {
					listadoProductos.push(cantEtiquetas + ' Etiquetas');
				}


				lista_productos.style.display = 'block';
				lista_productos.innerHTML = '';
				for (var i = 0; i < listadoProductos.length; i++) {
					lista_productos.innerHTML += listadoProductos[i] + '<br/>';
				}
				suma.innerHTML = '$ ' + totalPagar.toFixed(2);
			}
		}

      }

//console.log();
	});//DOMContentLoaded
})();

// Programa de conferencias

$(function() {

   $(".programa-evento .info-curso:first").show();
   $(".menu-programa a:first").addClass('activo');

   $(".menu-programa a").on('click', function() {
   	$(".menu-programa a").removeClass('activo');
   	$(this).addClass('activo');
   	$(".ocultar").hide();

   	 var enlace = $(this).attr('href');
   	 $(enlace).fadeIn(1000);	
   	 return false;																																																																																																																												
   });


//LETTERING

$('.nombre-sitio').lettering();

//Nombre fijo
var windowHeight = $(window).height();
var barraAltura = $('.barra').innerHeight();


$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll > windowHeight ) {
		$('.barra').addClass('fixed');
		$('body').css({'margin-top': barraAltura+'px'});
	}else{
		$('.barra').removeClass('fixed');
		$('body').css({'margin-top': '0px'});
	}
	//console.log(scroll);
});
//Menu responsive
$('.menu-movil').on('click', function () {
	$('.navegacion-principal').slideToggle();
});


// ANIMACIONES PARA LOS NUMEROS

$('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
$('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
$('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1500);
$('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500);



//Cuenta Regresiva

$('.cuenta-regresiva').countdown('2018/12/10 09:00:00', function(event){
  $('#dias').html(event.strftime('%D'));
  $('#horas').html(event.strftime('%H'));
  $('#minutos').html(event.strftime('%M'));
  $('#segundos').html(event.strftime('%S'));

});



});