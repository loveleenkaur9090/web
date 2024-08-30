// script.js
let progress = 0;
let progress2 = 0;

function increaseProgress() {
    if (progress < 10) {
        progress += 30;
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}
function increaseProgress2() {
    if (progress < 60 ) {
        progress += 40;
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}
function increaseProgress3() {
    if (progress < 100 ) {
        progress += 50;
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}
