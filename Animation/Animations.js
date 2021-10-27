let speedInterval = null;

const stop = function() {
    clearInterval(speedInterval);
};

const start = function() {
    const columns = document.querySelectorAll('.column span');
    console.log(columns)
    speedInterval = setInterval(() => {
        for (const column of columns) {
            const height = (Math.random() * 100).toFixed(5) + "%";
            column.style.transform = `translate3d(0, -${height}, 0)`;
            column.style.transitionDuration = `${500}ms`;
            column.style.backgroundColor = `#000`;
        }
    }, 500);
};
const startButton = document.getElementsByClassName("start");
// console.log(startButton)
startButton[0].addEventListener("click", start);

const stopButton = document.getElementsByClassName("stop");
stopButton[0].addEventListener("click", stop);

const hideSpan = function() {
    const columns = document.querySelectorAll('.column span');
    for (const column of columns) {
        column.style.backgroundColor = `transparent`;
    }

};

window.onload = hideSpan;