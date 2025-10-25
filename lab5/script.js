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
  
//Jquery Lab #3 animate and interactive

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


// Jquery lab 4 

//object and variables
$(document).ready(function() {                                        //when doc ready, run this function
  var gallery = {};                                                   //object gallery to store slideshow functions

    gallery.trigger = $("#photos .trigger");                            //find trigger element in photos and store in gallery trigger
    gallery.content = $("#photos_inner");                               //find list images inside photos inner
    gallery.scroll = false;                                             //set scroll to false -not to scroll without user 
    gallery.width = 300;                                                //image width
    gallery.innerWidth = gallery.content.width();                       //measure/store width of all imgs in slideshow
    gallery.timer = false;                                              //timer set for settimeout 


//find new position
gallery.offset = function() {                                       // function offset in gallery
  var left = gallery.content.position().left;                       // finds current position left of img list 
    if (gallery.scroll == '>') {                                    // check users mouse on right -scroll forward
      left -= gallery.width;                                        // move(subtract) gallery left by one img width

    if (left <= -(gallery.innerWidth - gallery.width)) { 
      left = 0;                                                     // if scroll too far left loop back to start
    }
    }
     else {                                                        // if mouse on left- scrolling backward
      left += gallery.width;                                       // move gallery right by one

    if (left > 0) {
      left = -1 * (gallery.innerWidth - gallery.width);            // if past start loo to last img
    }
    }
  return left + "px";                                              //return new left position 
  }


//slide animation loop
gallery.slide = function () {                                    //function slide animation loop
    if (gallery.timer) clearTimeout(gallery.timer);              //if timer exist clear timer so no overlap
    if (gallery.scroll) {                                        //continue slide if user scroll active

  gallery.content
    .stop(true, true)                                           //stops ongoing animiation
    .animate({ left: gallery.offset() }, 500);                  //move list to new offset position 500

  gallery.timer = setTimeout(gallery.slide, 2000);              //timer 2s call slide again when user hovers
  }
};

//find direction
gallery.direction = function (e, which) {                       //function direction finds which side gallery mouse on
  var x = e.pageX - which.offset().left;                        //mouse position by subtracting inside gallery --pagex:horizontal position on page --which.offset().left:distance from left page edge in gallery
    gallery.scroll = x >= gallery.width / 2 ? ">" : "<";        //ternary operator (set variable conditionally). if mouse on right side scroll >(forward). if mouse on left side scroll < (backward)
  };


//figure out hover
gallery.init = function () {                             //init function set for user mouse 
gallery.trigger 

.mouseout(function () {                                //mouse leaves gallery 
  gallery.scroll = false;                              //set scroll to false
})

.mousemove(function (e) {                              //mouse in gallery
  gallery.direction(e, gallery.trigger);              //updates direction checking position while hover 
})

.mouseover(function (e) {                            //mouse hover over gallery
  gallery.direction(e, gallery.trigger);            //call gallery direction to set direction
  gallery.slide();                                 //start slide loop animation 
});
};
//

gallery.init();                                                 //run function to start all hover handlers
});


// Lab #5 Accordion-What is Reiki Resources Section
$(document).ready(function() {  //when document ready run function 
  $(".accordion ul").hide();  // Select all elements in ul list in accordion and hide them at start 
  $(".accordion h3").click(function() { //when h3 in accordion clicked, run function    
    $(".accordion ul").not($(this).next()).slideUp();// find all open ul in accordion except one following click and close
    $(this).next("ul").slideToggle(); // Select ul after clicked h3 and toggle the clicked section with sliding animation- open/close
    $(".accordion h3").removeClass("active"); //remove active class from h3 to clear any highlights 
    $(this).toggleClass("active");//add/remove toggle active on clicked h3
  });
});
