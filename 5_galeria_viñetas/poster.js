let fox = document.querySelector('.foxy');
let golde = document.querySelector('.golden');
let sill = document.querySelector('.silla');
let masc = document.querySelector('.mascara');
let contadorInter = document.querySelector('#contador-interacciones');
let totalinteraction = 0;
const audioFondo = document.querySelector('#audio-fondo');
const imgsonido = document.querySelector('.sonido');
const audioFoxy = document.querySelector('#audio-foxy');
const audioGolden = document.querySelector('#audio-golden');
const audioSilla = document.querySelector('#audio-silla');
const audioMascara = document.querySelector('#audio-mascara');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const escena1 = document.querySelector('.escena1');
const escena2 = document.querySelector('.escena2');
const escena3 = document.querySelector('.escena3');
let i =1

fox.addEventListener('click', foxitranslate);
function foxitranslate() {
        fox.classList.add('mover')
        totalinteraction++;
        contadorInter.textContent = totalinteraction;
        audioFoxy.play();
        fox.addEventListener('click', foxitranslate);
}
golde.addEventListener('click', goldenscale);
function goldenscale() {
        golde.classList.add('mover2')
        totalinteraction++;
        contadorInter.textContent = totalinteraction;
        audioGolden.play();
        golde.addEventListener('click', goldenscale);
}
sill.addEventListener('click', silltranslate);
function silltranslate() {
        sill.classList.add('mover4')
        totalinteraction++;
        contadorInter.textContent = totalinteraction;
        audioSilla.play();
        sill.addEventListener('click', silltranslate);
}
masc.addEventListener('click', masrotate);
function masrotate() {
        masc.classList.add('mover3')
        totalinteraction++;
        contadorInter.textContent = totalinteraction;
        audioMascara.play();
        masc.addEventListener('click', masrotate);
}
imgsonido.addEventListener("click", sonidoFondo);

function sonidoFondo() {
    if (audioFondo.paused) {
        audioFondo.play();
    } else {
        audioFondo.pause();
    }
}
next.addEventListener('click', function () {
    if(i=== 1){
        escena1.classList.add('d-none');
        escena2.classList.remove('d-none');
        i++
    }else if(i=== 2){
        escena2.classList.add('d-none');
        escena3.classList.remove('d-none');
        i++
    }
})