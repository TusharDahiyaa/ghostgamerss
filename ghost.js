var myAudio = new Audio('Bfg_Division.mp3');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeaderColour(){
  colorInput=getRandomColor();
  $("#game-mode").css("color",colorInput);
}

setInterval("changeHeaderColour()",1500);

$("#game-mode").on("click",function(){
  myAudio.play();
  myAudio.volume = 0.2;
  $("#game-mode").html("<h1>GAME MODE <br>ACTIVATED!🎮</h1>");
});

$("#gameVideo").on("mouseover",function(){
    myAudio.pause();
});

$("#gamerVideo").on("mouseover",function(){
    myAudio.pause();
});

myAudio.addEventListener('pause', function(){
  $(document).on("click",function(){
    myAudio.play();
  });
});
