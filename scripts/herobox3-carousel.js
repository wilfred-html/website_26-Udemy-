// The python scroll
var slideIndex3 = 0;
var slides3 = document.getElementsByClassName("mySlides3");

showSlides3();

function showSlides3() {    
  var v;    
  for (v = 0; v < slides3.length; v++) {
      slides3[v].style.display = "none"; 
  }
  slideIndex3++;
  if (slideIndex3> slides3.length) {slideIndex3 = 1} 
  slides3[slideIndex3-1].style.display = "block"; 
  setTimeout(showSlides3, 6000000); // Change image every 5 seconds
}

function currentSlide3(no3) {
  var v;    
  for (v = 0; v < slides3.length; v++) {
      slides3[v].style.display = "none"; 
  }
  slideIndex3 = no3;
  slides3[no3-1].style.display = "block";
}

function plusSlides3(z) {
var newslideIndex3 = slideIndex3 + z;
if(newslideIndex3 < 4 && newslideIndex3 > 0){
   currentSlide3(newslideIndex3);
}
}



// python scroll word
function showthis301(){
  document.getElementById("prev3-2").style.display = "block";
}

function dontshow301(){
  document.getElementById("prev3-2").style.display = "none";
}


function both301() {
  if(document.getElementById("prev3-2").style.display == "block"){
    dontshow301()
  }
  else {
    showthis301()
  }
}

// 

function showthis302(){
  document.getElementById("next3-2").style.display = "block";
}

function dontshow302(){
  document.getElementById("next3-2").style.display = "none";
}

function both302() {
  if(document.getElementById("next3-2").style.display == "block"){
    dontshow302()
  }
  else {
    showthis302()
  }
}

