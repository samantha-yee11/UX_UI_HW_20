console.log("The Java Script file has loaded successfully");


function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 1500);

/* While it does *crash* the console while inspecting element (because of all the height and margin changes done inline on each span), there are no performance issues on user-side */

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

function equalizer(bar) {
    // Syntax: Math.random() * (max-min = range) + min;
    // My bars will be at least 70px, and at most 170px tall
    var height = Math.random() * 100 + 70;
    // Any timing would do the trick, mine is height times 7.5 to get a speedy yet bouncy vibe
    var timing = height * 7.5;
    
    bar.animate({
        height: height,
    }, timing, function() {
        equalizer($(this));
    });
  }
  
  // Action on play-pause buttons can be added here (should be a wholesome function rather than annonymous)
  $('#music-bars span').each(function(i) {
    equalizer($(this));
  });