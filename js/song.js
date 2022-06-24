var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
AOS.init();

window.onload = function () {
  document.getElementById("mySong").play();
};

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/Images2/play_circle_FILL0_wght400_GRAD0_opsz48.svg";
  } else {
    mySong.pause();
    icon.src = "/Images2/play_circle_FILL0_wght400_GRAD0_opsz48.svg";
  }
};
