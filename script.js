window.onresize = resolucion;
window.onload = resolucion;

let grupo = document.getElementsByClassName(`tarjetas-slider`);

var slideIndex = [1, 1, 1, 1, 1];
function resolucion() {
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	for (i = 0; i < grupo.length; i++) {
		if (ancho <= 1600) {
			showDivs(slideIndex[i], i);
		} else {
			var x = document.getElementsByClassName(`mySlides-${i}`);
			for (y = 0; y < x.length; y++) {
				x[y].style.display = "flex";
			}
		}
	}
}

function plusDivs(n, ubicacion) {
	showDivs((slideIndex[ubicacion] += n), ubicacion);
}

function currentDiv(n, ubicacion) {
	showDivs((slideIndex[ubicacion] = n), ubicacion);
}

function showDivs(n, ubicacion) {
	var i;
	var x = document.getElementsByClassName(`mySlides-${ubicacion}`);
	var dots = document.getElementsByClassName(`ubicacion-${ubicacion}`);
	if (n > x.length) {
		slideIndex[ubicacion] = 1;
	}
	if (n < 1) {
		slideIndex[ubicacion] = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("ls-red", "");
	}
	x[slideIndex[ubicacion] - 1].style.display = "flex";
	dots[slideIndex[ubicacion] - 1].className += "ls-red";
}


