
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%..... This is foreach loop.....
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {

  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

$(document).ready(function(){
    // $("#para").hide(3000)
    // $("#para").show(5000)
    // $("#para1").hide(3000)
    // $("#para1").show(5000)
    // // $("#para").fadeOut(3000)
    // // $("#para").fadeIn(5000)
    // $(".cource2").slideUp(5000)
    // $(".cource2").slideDown(3000)

    $("#home").click(function(top){
      top.preventDefault();
      $("html,body").animate({
          scrollTop:$($.attr(this,"href")).offset().top
      },2000)
  })

    $("#about2").click(function(top){
      top.preventDefault();
      $("html,body").animate({
          scrollTop:$($.attr(this,"href")).offset().top
      },2000)
  })
  $("#class2").click(function(top){
    top.preventDefault();
    $("html,body").animate({
        scrollTop:$($.attr(this,"href")).offset().top
    },2000)
})

$("#trainer").click(function(top){
  top.preventDefault();
  $("html,body").animate({
      scrollTop:$($.attr(this,"href")).offset().top
  },2000)
}) 
$("#trainer1").click(function(top){
  top.preventDefault();
  $("html,body").animate({
      scrollTop:$($.attr(this,"href")).offset().top
  },2000)
}) 
})

function validateform(){
  let username=document.getElementsByTagName("name")
  let LastName=document.getElementsByTagName("name")
  let Email=document.getElementsByTagName("name")
  let phonenumber=document.getElementsByTagName("name")
  let error = document.querySelectorAll(".formerror")
  let regEx =/^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;

  if(!username.value.match(/[a-zA-Z.]{5,50}$/) ){
      error[0].innerHTML="username is invaid"
      return false;
  }else if(phonenumber.value==""){
      error[1].innerHTML="please enter a password";
      return false;
  }else if(!password.value.match(regEx))
  error[2].innerHTML="password must be 8 c"

}

