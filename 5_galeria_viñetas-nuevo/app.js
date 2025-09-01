
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})

const escenas = document.querySelectorAll(".escena");
const btnSiguiente = document.querySelector(".siguiente");
const btnAnterior = document.querySelector(".anterior");
const miniaturas = document.querySelectorAll(".miniaturas img");
let indice = 0
const audioFondo = document.querySelector('#audio-2');
const imgsonido = document.querySelector('.sonido');
const audioFondo3 = document.querySelector('#audio-3');
const imgsonido3 = document.querySelector('.sonido2');
const audioFondo4 = document.querySelector('#audio-4');
const imgsonido4 = document.querySelector('.sonido3');

/* console.log(escenas);
console.log(escenas[1]); */
function mostrarEscena(i){
   /*  console.log(escenas[i]); */
   for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("activa");
   }
   escenas[i].classList.add("activa");

   indice = i
}
btnSiguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escenas.length){
        indice = 0
    }
    mostrarEscena(indice)
})
btnAnterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){
        indice = escenas.length - 1
    }
    mostrarEscena(indice)
})

miniaturas.forEach((minuatura, i)=> {
    minuatura.addEventListener("click", function (){
        mostrarEscena(i)
    })
});
imgsonido.addEventListener("click", sonidoFondo);

function sonidoFondo() {
    if (audioFondo.paused) {
        audioFondo.play();
    } else {
        audioFondo.pause();
    }
}
imgsonido3.addEventListener("click", sonidoFondo3);

function sonidoFondo3() {
    if (audioFondo3.paused) {
        audioFondo3.play();
    } else {
        audioFondo3.pause();
    }
}
imgsonido4.addEventListener("click", sonidoFondo4);

function sonidoFondo4() {
    if (audioFondo4.paused) {
        audioFondo4.play();
    } else {
        audioFondo4.pause();
    }
}