const video = document.querySelector("#video");
const playVideo = document.querySelector("#play-video");
const stopVideo = document.querySelector("#stop-video");
const img1 = document.querySelector("#play-stop-img1");
const audio1 = document.querySelector("#audio-1");
const img2 = document.querySelector("#play-stop-img2");
const audio2 = document.querySelector("#audio-2");

function reproducirVideo() {
    video.play();
}
playVideo.addEventListener("click", reproducirVideo);

function pausarVideo() {
    video.pause();
}
stopVideo.addEventListener("click", pausarVideo);

function toggleAudio1() {
    if (audio1.paused) {
        audio1.play();
        img1.textContent = "Stop";
    } else {
        audio1.pause();
        img1.textContent = "Play";
    }
}
img1.addEventListener("click", toggleAudio1);

function toggleAudio2() {
    if (audio2.paused) {
        audio2.play();
        img2.textContent = "Stop";
    } else {
        audio2.pause();
        img2.textContent = "Play";
    }
}
img2.addEventListener("click", toggleAudio2);