function countdown()        {       //defining a function
    var seconds = document.getElementById("seconds").value;     //setting the seconds variable

    function tick()     {       //a function within function
        seconds = seconds -1;       //always deduct 1 on seconds
        timer.innerHTML = seconds;      //replace the value of seconds with timer
        setTimeout(tick, 1000);     //the number will pause for 1 second
    if(seconds == -1)   {       //if it reaches negative result will display
        alert("Time's up!");        //the result
    }
    }
    tick();     //using the nested function inside a function
}

var slideIndex = 1;     //setting a variable for a slide
showSlides(slideIndex);     //shows the first slide and must be put before end of body tag

//the next and previous button with n as any variable on an array
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {        //setting the function for slides
  var i;  //variable inside a function
  var slides = document.getElementsByClassName("mySlides");     //setting var slides
  var dots = document.getElementsByClassName("dot");    //setting dots
  if (n > slides.length) {slideIndex = 1}       //first condition 
  if (n < 1) {slideIndex = slides.length}       //second
  for (i = 0; i < slides.length; i++) {     
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}