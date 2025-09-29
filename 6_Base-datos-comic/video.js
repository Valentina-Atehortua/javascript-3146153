const video = document.querySelector("#video");
const playVideo = document.querySelector("#play-video");
const stopVideo = document.querySelector("#stop-video");

function reproducirVideo() {
    video.play();
}
playVideo.addEventListener("click", reproducirVideo);

function pausarVideo() {
    video.pause();
}
stopVideo.addEventListener("click", pausarVideo);
