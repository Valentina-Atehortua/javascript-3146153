const tituloComic = document.querySelector(".titulo-comic")
const descripcionComic = document.querySelector(".descripcion-comic")
const imgComic = document.querySelector(".img-comic")
const listaCaps = document.querySelector(".lista-caps")

tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion 
imgComic.src=comic.bgBanner

comic.capitulos.forEach(cap => {
    const div = document.createElement("div")
    div.classList.add("card-miniatura")
    div.innerHTML = `
         <img src="${cap.imgPortada}" data-index="0" alt="Miniatura 1">
         <p>${cap.nombreCap}</p>
    `
    listaCaps.appendChild(div)
})