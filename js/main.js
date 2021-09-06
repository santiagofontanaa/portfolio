/* ALL CODE FOR @SANTIAGOFONTANAA */
const imagenes = document.querySelectorAll(".container__presentacion-img")   
        
let contador = 0;

function rotarImagenes()
{
    console.log(imagenes)
    if(contador === 3) contador = 0;
    for(let i = 0; i < imagenes.length; i++){
        imagenes[i].classList.remove("show")
    }
    imagenes[contador].classList.add("show")
    contador++
}

onload=function()
{
    rotarImagenes();
    setInterval(rotarImagenes, 4000);
}
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* ALL CODE FOR @SANTIAGOFONTANAA */