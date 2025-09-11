//nav hamburger menu mobile javascript//
document.addEventListener("DOMContentLoaded", function() { 
    const hamburger = document.querySelector(".hamburger"); //select hamburger icon 
    const navMenu = document.querySelector("nav ul");      //select nav menu
  
    if (hamburger && navMenu) {                          //only run if nav hamburger elements on page
      hamburger.addEventListener("click", function() {  //when hamburger clicked
        navMenu.classList.toggle("show");              //show class to appear/disappear in mobile
      });
    }
  });


//jquery lab 2//

//fade in text welcome hero section//
$(function() {
    $("#hero h1").hide().fadeIn(2000);   //hide hero heading first and soft subtle fade in 2s 
    $("#hero h2").hide().fadeIn(3000);  //hide hero subheading and fade in 3s
});


//filter selector and CTA//
$(function() {         
    $(".cta").each(function() {//for ea cta section 
      $(this).find(".cta-button:first").hover(               //find first cta button inside this section
        function() { $(this).addClass("highlight"); },      //hover over add highlight
        function() { $(this).removeClass("highlight"); }   //hover off remove highlight
      );
    });

  
    // fade Contact button for complimentary service w/delay
    if ($(".contact-btn").length) {                        //if contact-btn exists run hide delay fadein
      $(".contact-btn").hide().delay(3000).fadeIn(2000);  //start hidden, wait 3s and fade in 2s
    }
  });
  
