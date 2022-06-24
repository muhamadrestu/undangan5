function addEvent(obj, type, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(type, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + type, fn);
  }
}

addEvent(document.getElementById("mySong"), "ended", function () {
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
});

function togglePlay(state) {
  var audio = document.getElementById("mySong"),
    play = document.getElementById("play"),
    pause = document.getElementById("pause");

  if (state == "play") {
    audio.play();
    play.style.display = "none";
    pause.style.display = "block";
  } else {
    audio.pause();
    play.style.display = "block";
    pause.style.display = "none";
  }
}
