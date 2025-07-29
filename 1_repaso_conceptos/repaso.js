let img = document.querySelector("#img1")
let butt = document.querySelector("#blanco")
let butt2 = document.querySelector("#desenfocar")
let butt3 = document.querySelector("#zoom")

img.addEventListener("click", () => {
    img.style.filter = "grayscale(100%)";
});
butt.addEventListener("click", () => {
    img.style.filter = "grayscale(100%)";
});
butt2.addEventListener("click", () => {
    img.style.filter = "blur(2px)";
});