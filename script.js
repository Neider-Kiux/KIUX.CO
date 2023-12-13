window.onresize = resolucion;
window.onload = resolucion;

var slideIndex = 1;
function resolucion() {
    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    if (ancho <= 1600) {
        showDivs(slideIndex);
    } else {
        var x =
            document.getElementsByClassName("mySlides-paraQuien");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "flex";
        }
    }
}

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function currentDiv(n) {
    showDivs((slideIndex = n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides-paraQuien");
    var dots = document.getElementsByClassName("ubicacion");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("ls-red", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += "ls-red";
}