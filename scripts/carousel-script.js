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
var slideIndex2 = 0;
var slides2 = document.getElementsByClassName("mySlides2");

showSlides2();

function showSlides2() {    
  var k;    
  for (k = 0; k < slides2.length; k++) {
      slides2[k].style.display = "none"; 
  }
  slideIndex2++;
  if (slideIndex2> slides2.length) {slideIndex2 = 1} 
  slides2[slideIndex2-1].style.display = "block"; 
  setTimeout(showSlides2, 6000000); // Change image every 5 seconds
}

function currentSlide2(no2) {
  var k;    
  for (k = 0; k < slides2.length; k++) {
      slides2[k].style.display = "none"; 
  }
  slideIndex2 = no2;
  slides2[no2-1].style.display = "block";
}

function plusSlides2(m) {
var newslideIndex2 = slideIndex2 + m;
if(newslideIndex2 < 4 && newslideIndex2 > 0){
   currentSlide2(newslideIndex2);
}
}
// 


// python scroll word
function showthis201(){
  document.getElementById("prev1").style.display = "block";
}

function dontshow201(){
  document.getElementById("prev1").style.display = "none";
}


function both201() {
  if(document.getElementById("prev1").style.display == "block"){
    dontshow()
  }
  else {
    showthis201()
  }
}


function showthis202(){
  document.getElementById("next1").style.display = "block";
}

function dontshow202(){
  document.getElementById("next1").style.display = "none";
}


function both202() {
  if(document.getElementById("next1").style.display == "block"){
    dontshow()
  }
  else {
    showthis202()
  }
}
