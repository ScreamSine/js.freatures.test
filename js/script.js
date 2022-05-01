let t1;
let t2;
let start = false;
const engine = new Audio("./audio/engine.mp3");
const engineDrive = new Audio("./audio/engine drive.mp3");
engine.loop = true;
document.querySelector(".start").addEventListener("click", function () {
  if (start === false) {
    start = true;
    this.innerHTML = "stop";
    engine.play();
    document.querySelector(".treadle").addEventListener("click", pushPedal); // событие на педаль
    document.querySelector(".progress-line").style.width = "100px";
  } else {
    start = false;
    this.innerHTML = "start";
    engine.pause();
    document.querySelector(".treadle").removeEventListener("click", pushPedal); // событие на педаль
    document.querySelector(".progress-line").style.width = "0px";
  }
});

function pushPedal() {
  t1 = clearTimeout(t1);
  t2 = clearTimeout(t2);
  this.classList.add("treadle-push");
  document.querySelector(".progress-line").style.width = "300px";
  engineDrive.play();
  stopThreadle();
}

function stopThreadle() {
  t1 = setTimeout(() => {
    document.querySelector(".treadle").classList.remove("treadle-push");
    document.querySelector(".progress-line").style.width = "100px";
  }, 1000);
  t2 = setTimeout(() => {
    document.querySelector(".treadle").classList.remove("treadle-push");
    engineDrive.pause();
    engineDrive.currentTime = 0;
  }, 1500);
}
