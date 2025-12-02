// mobile nav hamburger toggle
document.addEventListener("DOMContentLoaded", function() {        //run function
  const hamburger = document.querySelector(".hamburger");        //find first element inside variable hamburger
  const navMenu = document.querySelector("nav ul");              //find ul list in nav element in variable navmenu
    if (hamburger && navMenu) {                                 //find both elements before running
    hamburger.addEventListener("click", function() {            //when click hamburger run function
    navMenu.classList.toggle("show");                           //add/remove "show" on ul
    });
}
});


// xmasCountdown--countdown to xmas day 
(function($) {                                                  //when dom  ready run function
$.fn.xmasCountdown = function(options) {                         //new method -find plugin element xmascountdown 
const settings = $.extend({                                     //variable seeings use extend function to combine objects date and message
targetDate: new Date('December 25, 2025 00:00:00')               //new date object for midnight christmas 2025-countdown complete
}, options);                                                    //close extend to combine object and options
function updateCountdown($elem) {                               //inner function update countdown-calculate time difference to update in element $elem
const now = new Date();                                         //make new date object with current 
const diff = settings.targetDate - now;                         //calculate current now from target date to get milliseconds remaining 
if (diff <= 0) {                                                //check if countdown over if less then or equal to zero
$elem.find('p').text('Happy Holidays!');                        //find p element in $elem if time up- change msg to Happy Holidays 
return;//stop function
}
//calculate time//
const days = Math.floor(diff / (1000 * 60 * 60 * 24));           //takes total days remaining until target. divide milliseconds by number milliseconds in day and round down
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);       //takes how many hours after full days removed %24 is remainder of 0-23hr
const minutes = Math.floor((diff / (1000 * 60)) % 60);          //remaining minutes after hours removed-remainder of 0-59
const seconds = Math.floor((diff / 1000) % 60);                 //remaining seconds after full min removed-remainder of 0-59
// Update numbers inside  span elements
$elem.find('.days').text(days);                               //find element w/class days in $elem and update with days left
$elem.find('.hours').text(hours);                             //find element with class hours in $elem and update with hours 
$elem.find('.minutes').text(minutes);                         //find minutes in $elm and update with minutes left
$elem.find('.seconds').text(seconds);                          //find seconds in $elem and update with seconds remaining
}
// Start widget and keep updating
return this.each(function() {                                 //each element plugin called on-run this function
const $this = $(this);                                        //stores current element in object and store in $this to use methods
updateCountdown($this);                                       //calls updatecountdown function immediately to display countdown 
setInterval(function() { 
updateCountdown($this);
}, 1000);                                                     //run updatecountdown function every 1000millisecond or 1s to keep constant countdown
});
};
})(jQuery);
// Activate plugin
$(function() {                                                 //run when dom ready
$('#xmasCountdown').xmasCountdown();                           //select element id xmascountdown and call plugin -activates plugin for html element
});


//floating nav
$(document).ready(function(){                               // when doc ready, run this function
var $window = $(window);                                    //select window
var $nav= $("nav");                                         //select navigation
$window.scroll(function() {                                                         //runs when window scrolled
if (!$nav.hasClass("fixed") && ($window.scrollTop() > $nav.offset().top)) {         //check if nav is fixed & page scrolled past nav original position 
$nav.addClass("fixed").data("top", $nav.offset().top);}                             //add fixed class to nav and stores nav position to compare when scrolling up
else if ($nav.hasClass("fixed") && ($window.scrollTop() <= $nav.data("top"))) {     //runs if nav fixed and check if scrolled back up equal or past nav original position
$nav.removeClass("fixed");                                                          //removes fixed class to go to normal nav layout
}
});
});
$(document).ready(function() {              // when doc ready, run this function
$("nav a").hover(function() {               //selects nav a in navigation & runs when moouse hover over
$(this)                                     //this is for specific link the mouse currently is over
.animate({ paddingLeft: "10px" }, 100)      // moves the hovered links padding right to 10px for .1s
.animate({ paddingLeft: "0px" }, 100)       // puts it back to normal position
.animate({ paddingLeft: "5px" }, 50)        // moves padding left smaller movement 5px and quicker at .05s
.animate({ paddingLeft: "0px" }, 50);       // moves padding back to normal position 
});
});

// Navigation click sound
$(document).ready(function() {                            //run function when ready
const navSound = document.getElementById("navSound");   //select audio element with id navSound and store as navSound
$(".nav-link").click(function() {                       //find all elements with class navlink (nav <a> tags) and add click handler. when clicked run following function
playSound(navSound);                                  //call reusable function playSound and put in navSound audio element to rewind and replay
});
});


//santa paws pet language- Pet Dropdown: Change Letter Placeholder
$(document).ready(function() {            //run function when doc ready 
$("#petType").change(function() {         //find element id petType and add a change event handler to it , run the following if user change option
var type = $(this).val();                 //in change handler $this wraps element from dropdown trigger event as object val finds the selected value in variable type from dropdown 
var words = {                             //javascript object named Words with value pair pet type
cat: "meow meow meow...",                 //ea key is pet type matching dropdown values. 
dog: "woof woof woof...",                 //ea value is placeholder text string for pet textarea
fish: "glub glub...",
hamster: "squeak squeak...",
bird: "chirp chirp..."
};
$("#petLetter").attr("placeholder", words[type]);                     //find element id petLetter in textarea and set placeholder attribute to Words (type). Words(type) looks at correct string in Words object using type variable (pet) 
});                                                                   //.attr(placeholder) updates visible placeholder text in textarea
});

// Send Santa Paws Letter
// sound function
function playSound(audioElement) {                    //function named playSound and audioElement declared. Reusable function. 
audioElement.currentTime = 0;                         //set audio element playback position to start 0s to replay 
audioElement.play();                                  //tell browswer to play audio element
}
// Popup function
function showPopup() {                      //function showPopup declared. Will show message popup and hide again
$("#messagePopup")                          //select element id messagePopup (popup div)
.stop(true, true)                           // call .stop on selection to quickly stop animation on element. boolean clears pending animations and moves to end of current animation.- aka reset animation if clicked again quickly. 
.fadeIn(300)                                //start fade in animation so popup visible .3s
.delay(2000)                                //wait 2s with popup visible then continue chain
.fadeOut(300);                              //after delay, fade out .3s to hide popup
}
// Letter sound + popup
$(document).ready(function() {                                    //run function when ready
const santaSound = document.getElementById("santaSound");        //find audio element with id santaSound and store dom node in santasound constant
$(".play-santa-sound").click(function() {                       //find all element with class paly-santa-sound (send letter) and add click event handler-when clicked run below function 
playSound(santaSound);                                          //call playSound function and pass santaSound audio element. -rewinds and plays sound
showPopup();                                                    //call showPopup function to show red popup message
//  Santa letter button
if (this.id === "sendSanta") {      //this is dom element thats clicked. check id property if = to sendSanta run the following
$("#kidLetter").val("");           //find element with id kidLetter and set value to string-clear textarea
$("#kidName").val("");             //find element with id kidname in name input and clear
$("#kidAge").val("");             //find element with id kidage in age input and clear value
$("#kidLocation").val("");       //find element with id kidlocation in location input and clear value
}
// Santa Paws letter button
if (this.id === "sendPaws") {   //check if clicked element is sendPaws and run following to clear santa paws inputs
$("#petLetter").val("");      //check element petletter in textarea and clear value
$("#petName").val("");        //check pet name input for element id and clear value
$("#petAge").val("");         //check elelment petage and clear 
}
});
});


// Naughty or Nice Checker
$(document).ready(function() {            //run this when page ready

  $("#checkListBtn").click(function() {   //when id checkListBtn button is clicked, run function
    var name = $("#checkName").val();     //get value from id checkname input field and store in variable name
    if (name === "") {                    //check if input empty (or name typed)
      alert("Please enter your name!");   //show alert box please type name to tell user to enter name
      return;                             //stop function 
    }
    // Randomized Naughty/Nice (50/50)
    var result = Math.random() < 0.5 ? "Nice" : "Naughty";  //generate random number 0-1. if less then .5 the result=nice. else=naughty
    var message = "";                                       //create empty variable to hold message
    var img = "";                                           //create empty variable to hold image
    if (result === "Nice") {                                                                                            //if random result=nice, run the following
      message = "Keep it up, " + name + "! You're on the Nice List!";                                                   //send personalized msg using name for nice result
      img = "imgs/santa-vintage.jpg";                                                                                   //set img for nice result
    } else {                                                                                                            //if result naughty, run the following
      message = "Uh oh " + name + "! You're on the Naughty List... but there's still time to get to the Nice List!";    //send personalized msg using name if naughty list result
      img = "imgs/santa-coal.jpg";                                                                                      //set img for naughty list result
    }
    // popup content
    $("#nicePopup").html(                             //replace html in popup div with new content
      "<img src='" + img + "'>" +                     //add img selected above
      "<p><strong>" + result + "!</strong></p>" +     //add Nice or Naughty in bold in paragraph
      "<p>" + message + "</p>"                        //add full msg paragraph
    );
    // Position next to button
    var btnPos = $("#checkListBtn").offset();     //get button position coordinates and store in btnpos
    $("#nicePopup")                               //select popup again
      .css({                                      //apply css style to popup
        top: btnPos.top - 250,                    //set popup top position = top position - 250px
        left: btnPos.left - 20                    //set popup left position =btn left position -20px
      })
      .fadeIn(300)                                //fade in popup up 300ms
      .delay(2500)                                //keep visible 2.5s
      .fadeOut(300, function() {                  //fade out over 300ms then run function after
        $("#checkName").val("");                  // clear name field after popup fades
      });

  });

});


// Santa Sightings Gallery
$(document).ready(function () {         //run function when page ready
  // gallery object
  var gallery = {};                     //create gallery 
  // array of image names in gallery
  gallery.photos = [
    "santa-in-town.jpg",
    "santa-claus-selfie.jpg",
    "santa-flight.jpg",
    "santa-forest.jpg",
    "santa-plane.jpg",
    "santa-sky-moon.jpg",
    "santa-sleigh-spotted-CA.jpg",
    "santa-spotted-city.jpg"
  ];
  gallery.index = 0;                                                            // start at first img in array- variable index set to 0 
  // function to update image
  gallery.showPhoto = function () {                                             //create function showphoto in gallery object
    $("#santaDisplay").attr("src", "imgs/" + gallery.photos[gallery.index]);    //find img with id santadisplay, switch src attribute to new img, img chosen from galleryphotos array using current index # in imgs/ path 
  };
  // next img right arrow
  $(".right-arrow").click(function () {                                        //find element with class right arrow, when clicked run function for next picture
    gallery.index++;                                                          //add 1 to current index to move next photo in array
    if (gallery.index >= gallery.photos.length) {                             //check if index is past the last photo in array, 
      gallery.index = 0;                                                      // set index to 0 to loop gallery
    }
    gallery.showPhoto();                                                      //call function to update displayed photo
  });
  // previous img left arrow 
  $(".left-arrow").click(function () {                                        //find element with class left arrow, when clicked run function for previous picture 
    gallery.index--;                                                          //subtract 1 from inxed to go backward in list
    if (gallery.index < 0) {                                                  //if index below 0 user scrolled past first img
      gallery.index = gallery.photos.length - 1;                              // loop to last
    }
      gallery.showPhoto();                                                   //update photo using updated index
    });
});

//snowflake feature webpage
$(document).ready(function () {                                      //run function when ready
  function createSnowflake() {                                       //create function createsnowflake to make falling snow
    var snow = $("<div class='snowflake'>❄</div>");                 // create new div element with class snowflake and ❄ symbol and store in variable snow
    // random start
    var startLeft = Math.random() * $(window).width();               //generate number between 0 and browser width and use # for where horizontal snowflake position
    // random size
    var size = (Math.random() * 20) + 10;                            //create random sizes of snowflake from 10-30px
    // apply CSS 
    snow.css({                                                       //apply css directly on snowflake 
      left: startLeft,                                               //appear horizontal on page -set left css of snowflake to random horizontal value in starleft
      fontSize: size + "px",                                         //set visual font size of ❄ to random value 10-30 
      opacity: Math.random() + 0.3                                   //random transparency from 0.3-1.3
    });
    $("body").append(snow);                                          //insert snowflake div to body of page
    // animate falling snowflakes
    snow.animate({                                                  //begin animation on snowflake with animate function
      top: $(window).height() + 40,                                 //animate top property- move snowflake down to bottom screen. 
      left: startLeft + (Math.random() * 40 - 20)                   //animate snowflake to wriggle/drift left or right between -20 and 20 randomly
    }, 
    5000 + Math.random() * 3000,                                     //set animation duration random 5s-8ms randomly so snowflakes fall at different speed
    function () {                                                   //callback function to run after snowflake animation finished falling
      $(this).remove();                                             // delete/remove snowflake element from pg when reaches bottom to stop buildup
    });
  }
  // create snow every 200 ms
  setInterval(createSnowflake, 200);                                //run reatesnowflake every 200ms for constant fall effect
});


$(document).ready(function () {                                                               //when ready run function
  // List of joke questions/answers for joke section
  var jokes = [                                                                               //variable jokes to hold array of jokes
    { q: "What’s every elf’s favorite type of music?", a: "Wrap!" },                          //joke question (q) then punchline (a)
    { q: "What do you call Santa when he takes a break?", a: "Santa Pause" },
    { q: "Why is everyone thirsty at the North Pole?", a: "No well" },
    { q: "How did the reindeer learn to play piano?", a: "He was elf-taught" },
    { q: "Why does Scrooge love Rudolph?", a: "Because every buck is dear to him!" },
    { q: "What do you call a reindeer ghost?", a: "Cari-boo!" },
    { q: "Which reindeer has the best moves?", a: "Dancer!" },
    { q: "What do you call an old snowman?", a: "Water" },
    { q: "How do you help someone with no holiday spirit?", a: "Nurse them back to elf!" },
    { q: "What is a Christmas tree’s favorite candy?", a: "Orna-mints!" },
    { q: "What do you call a cat on the beach?", a: "Sandy Claws" },
    { q: "Why does everyone love Frosty?", a: "Because he’s so cool!" },
    { q: "Which reindeer has bad manners?", a: "Rude-olph!" },
    { q: "What do Santa’s helpers learn in school?", a: "The elf-abet!" },
    { q: "What falls but never gets hurt?", a: "Snow!" },
    { q: "Why do reindeer wear bells?", a: "Because their horns don’t work!" },
    { q: "Why is it cold at Christmas?", a: "Because it’s Decem-brrrrr!" },
    { q: "Why are Christmas trees bad at sewing?", a: "They always drop their needles!" },
    { q: "What did the naughty soccer announcer get?", a: "COOOOOOAAALLL!" },
    { q: "Santa’s favorite chips?", a: "Crisp Pringles!" },
    { q: "How do you know Santa is around?", a: "You can sense his presents." },
    { q: "How did Scrooge win the football game?", a: "Because the ghost of Christmas passed" },
    { q: "What happens if the Elf on the Shelf wins lottery?", a: "They're welfy!" },
    { q: "Why did only the letter ‘E’ get a gift?", a: "The others were not E." }
  ];
  // Function to load random joke
  function loadRandomJoke() {                                                                   //function loadrandomjoke shows new random joke when called
    var randomIndex = Math.floor(Math.random() * jokes.length);                                 //generate random number 0 to # of jokes for which joke on list to pick
    var todaysJoke = jokes[randomIndex];                                                        //store selected joke object in variable todaysjoke 
    $("#jokeQuestion").text(todaysJoke.q);                                                      //change text in element with id jokequestion to to question of selected joke
    $("#jokeAnswer").text(todaysJoke.a).hide();                                                 //change answer text and hide it immediately so question only appears first
    $("#newJokeBtn").hide();                                                                    // hide button until answer shown
  }
  // Load joke on page load
  loadRandomJoke();                                                                             //call function once immediately for user to see joke when page loads
  // click for answer 
  $("#revealJokeBtn").click(function () {                                                       //when reveal answer btn clicked run function
    $("#jokeAnswer").slideToggle(400);                                                          //slide the answer down/up 400ms
    // Show new joke btn after answer revealed
    $("#newJokeBtn").fadeIn(800);                                                               //fade in new joke btn over 800ms to appear after answer revealed
  });
  // Load next joke
  $("#newJokeBtn").click(function () {                                                          //when user click new joke btn, run function
    loadRandomJoke();                                                                           //call same functionagain to choose/display random joke again
  });

});
