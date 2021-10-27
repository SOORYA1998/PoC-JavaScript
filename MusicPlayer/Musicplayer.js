function toggleLike() {
    var x = document.getElementById("heart");
    x.classList.toggle("fa-heart-broken");
}

var x = document.getElementById("myAudio");

const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");


function progressValue() {
    progressBar.max = x.duration;
    progressBar.value = x.currentTime;

    currentTime.textContent = formatTime(x.currentTime);
    durationTime.textContent = formatTime(x.duration);
}


setInterval(progressValue, 500);

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function changeProgressBar() {
    x.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);

let play = document.getElementById("play");
let pause = document.getElementById("pause");

let playing = true;

function pausePlay() {
    if (playing) {
        play.style.display = "none";
        pause.style.display = "block";

        x.play();
        playing = false;
    } else {
        pause.style.display = "none";
        play.style.display = "block";

        x.pause();
        playing = true;
    }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);