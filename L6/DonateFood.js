$("#donate").click(function(){
  $("#progress").css("background-color", "lime")
    .delay(1200)
    .animate({height: "25%"}, 50)
    .delay(1200)
    .animate({height: "50%"}, 50)
    .delay(1200)
    .animate({height: "75%"}, 50)
    .delay(1200)
    .animate({height: "100%"}, 50);
});