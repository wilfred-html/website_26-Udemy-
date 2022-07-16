var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {    
  var i;    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex> slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 6000); // Change image every 5 seconds
}

function currentSlide(no) {
  var i;    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slideIndex = no;
  slides[no-1].style.display = "block";
}

function plusSlides(n) {
var newslideIndex = slideIndex + n;
if(newslideIndex < 4 && newslideIndex > 0){
   currentSlide(newslideIndex);
}
}



// The python scroll
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides2");

showSlides2();

function showSlides2() {    
  var i;    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex> slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides2, 6000); // Change image every 5 seconds
}

function currentSlide2(no) {
  var i;    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slideIndex = no;
  slides[no-1].style.display = "block";
}

function plusSlides2(n) {
var newslideIndex = slideIndex + n;
if(newslideIndex < 4 && newslideIndex > 0){
   currentSlide2(newslideIndex);
}
}


function showthis(){
  document.getElementById("prev1").style.display = "block";
}

function dontshow(){
  document.getElementById("prev1").style.display = "none";
}


function both() {
  if(document.getElementById("prev1").style.display == "block"){
    dontshow()
  }
  else {
    showthis()
  }
}
