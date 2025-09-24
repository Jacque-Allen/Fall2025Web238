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

//learn more sessions button
document.addEventListener("DOMContentLoaded", function() { //run after html loaded
  const learnMoreBtns = document.querySelectorAll(".learn-more"); //select all elements of learn more

  learnMoreBtns.forEach(function(btn) {        //loop through ea button
  btn.addEventListener("click", function() {  //click event listener to button
  const content = this.nextElementSibling;   //expandable-  next direct element following learn more button- get next sibling element after this button 
  if (content.style.display === "block") {  //check if visible content
  content.style.display = "none";          //if visible, hide it
  } else {
  content.style.display = "block";        //if hidden, show content
}
});
});
});

  //jquery lab 2//

//fade in text welcome hero section//
$(function() {
    $("#hero h1").hide().fadeIn(2000);         //hide hero heading first and soft subtle fade in 2s 
    $("#hero h2").hide().fadeIn(3000);        //hide hero subheading and fade in 3s
});

//filter selector and CTA//
$(function() {         
    $(".cta").each(function() {                             //for ea cta section 
      $(this).find(".cta-button:first").hover(              //find first cta button inside this section
        function() { $(this).addClass("highlight"); },      //hover over add highlight
        function() { $(this).removeClass("highlight"); }    //hover off remove highlight
      );
    });
  
    // fade Contact button for complimentary service w/delay
    if ($(".contact-btn").length) {                          //if contact-btn exists run hide delay fadein
      $(".contact-btn").hide().delay(3000).fadeIn(2000);    //start hidden, wait 3s and fade in 2s
    }
  });
  
//Lab #3 animate and interactive

// wobble effect for nav links
  $(document).ready(function() {                   // when doc ready, run this function
  
    $("nav a").hover(function() {                 //selects nav a in navigation & runs when moouse hover over
      $(this)                                     //this is for specific link the mouse currently is over
      .animate({ paddingLeft: "10px" }, 100)      // moves the hovered links padding right to 10px for .1s
      .animate({ paddingLeft: "0px" }, 100)       // puts it back to normal position
      .animate({ paddingLeft: "5px" }, 50)        // moves padding left smaller movement 5px and quicker at .05s
      .animate({ paddingLeft: "0px" }, 50);       // moves padding back to normal position 
      });
  });

//floating nav
  $(document).ready(function(){                   // when doc ready, run this function
    var $window = $(window);                      //select window
    var $nav= $("nav");                           //select navigation
  
  $window.scroll(function() {                                                         //runs when window scrolled
    if (!$nav.hasClass("fixed") && ($window.scrollTop() > $nav.offset().top)) {       //check if nav is fixed & page scrolled past nav original position 
    $nav.addClass("fixed").data("top", $nav.offset().top);}                           //add fixed class to nav and stores nav position to compare when scrolling up
  
  else if ($nav.hasClass("fixed") && ($window.scrollTop() <= $nav.data("top"))) {     //runs if nav fixed and check if scrolled back up equal or past nav original position
  $nav.removeClass("fixed");                                                          //removes fixed class to go to normal nav layout
  }
  });
  });
