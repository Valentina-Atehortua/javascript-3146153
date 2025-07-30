const pantalla = document.querySelector("#img1")
const btn1 = document.querySelector("#blanco")
const btn2 = document.querySelector("#desenfocar")
const btn3 = document.querySelector("#zoom")

function blancoynegro () {
    console.log ("Imagen modificada")
    pantalla.style.filter = "grayscale(100%)"
    /* btn1.style.backgroundColor = "orange"
    btn1.style.color = "white"
    btn1.style.height = "200px"
    btn1.style.borderRadius = "50%" */
}
btn1.addEventListener("click", blancoynegro);

function desenfocar () {
    console.log ("Imagen modificada")
    pantalla.style.filter = "blur(5px)"
}
btn2.addEventListener("click", desenfocar);

function zoom () {
    console.log ("Imagen modificada")
    pantalla.style.transform = "scale(1.2) rotate(25deg)"
}
btn3.addEventListener("click", zoom);