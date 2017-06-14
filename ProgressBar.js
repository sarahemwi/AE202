// Students write all Javascript code in this project

$("#red").click(function(){
  $("#progress").css("background-color", "red")
});

$("#blue").click(function(){
  $("#progress").css("background-color", "blue")
});

$("#green").click(function(){
  $("#progress").css("background-color", "green")
});

// The progress bar effect
$("#start").click(function(){
  $("#progress").css("width", "12%")
    .delay(1200)
    .animate({width: "25%"}, 500)
    .delay(1200)
    .animate({width: "50%"}, 500)
    .delay(1200)
    .animate({width: "75%"}, 500)
    .delay(1200)
    .animate({width: "100%"}, 500);

  // Updating percentages (discuss why we have to .queue)
   $("#percentage").html("0%")
    .delay(1700)
    .queue(function(next) {
        $(this).html("25%");
        next();
     })
    .delay(1700)
    .queue(function(next) {
        $(this).html("50%");
        next();
     })
    .delay(1700)
    .queue(function(next) {
        $(this).html("75%");
        next();
     })
    .delay(1700)
    .queue(function(next) {
        $(this).html("100%");
        next();
     })
})