// script.js
let progress = 30;
// let progress2 = 45;
// let progress3 = 5;

function increaseProgress() {
    if (progress < 30) {
        progress += 30;
        document.getElementById('progress-bar').style.width = progress + '%';
    }else{
        alert("you are not eligible");
    }
}



    
// function increaseProgress2() {
//     if (progress < 45 ) {
//         progress += 40;
//         document.getElementById('progress-bar').style.width = progress + '%';
//     }
// }
// function increaseProgress3() {
//     if (progress < 65 ) {
//         progress += 50;
//         document.getElementById('progress-bar').style.width = progress + '%';
//     }
// }
