const carousel = document.querySelector(".h-carousel");
const imgCarousel = document.querySelectorAll(".img-contenido");

let stringUno = document.querySelector(".primer-numero");
let stringDos= document.querySelector(".segundo-numero");


let movimiento = [
    imgCarousel[imgCarousel.length - 1],
    imgCarousel[imgCarousel.length - 2],
    imgCarousel[imgCarousel.length - 3],
    imgCarousel[imgCarousel.length - 4],
    imgCarousel[imgCarousel.length - 5],
    imgCarousel[imgCarousel.length - 6]
];

let btDerecho = document.querySelector(".h-derecho");
let btIzquierdo = document.querySelector(".h-izquierdo");


carousel.insertAdjacentElement("afterbegin", movimiento[0]);
carousel.insertAdjacentElement("afterbegin", movimiento[1]);
carousel.insertAdjacentElement("afterbegin", movimiento[2]);
carousel.insertAdjacentElement("afterbegin", movimiento[3]);
carousel.insertAdjacentElement("afterbegin", movimiento[4]);
carousel.insertAdjacentElement("afterbegin", movimiento[5]);


let lugar = carousel.scrollLeft += 1190;
function next() {
    let movimientoU = [
        document.querySelectorAll(".img-contenido")[0],
        document.querySelectorAll(".img-contenido")[1],
        document.querySelectorAll(".img-contenido")[2],
        document.querySelectorAll(".img-contenido")[3],
        document.querySelectorAll(".img-contenido")[4],
        document.querySelectorAll(".img-contenido")[5]
    ];
    let lugar = carousel.scrollLeft = 1190;
    carousel.insertAdjacentElement("beforeend", movimientoU[0]);
    carousel.insertAdjacentElement("beforeend", movimientoU[1]);
    carousel.insertAdjacentElement("beforeend", movimientoU[2]);
    carousel.insertAdjacentElement("beforeend", movimientoU[3]);
    carousel.insertAdjacentElement("beforeend", movimientoU[4]);
    carousel.insertAdjacentElement("beforeend", movimientoU[5]);
}
function prev() {
    const imgCarousel = document.querySelectorAll(".img-contenido");
    let movimiento = [
        imgCarousel[imgCarousel.length - 1],
        imgCarousel[imgCarousel.length - 2],
        imgCarousel[imgCarousel.length - 3],
        imgCarousel[imgCarousel.length - 4],
        imgCarousel[imgCarousel.length - 5],
        imgCarousel[imgCarousel.length - 6]
    ];
    let lugar = carousel.scrollLeft = 1190;
    carousel.insertAdjacentElement("afterbegin", movimiento[0]);
    carousel.insertAdjacentElement("afterbegin", movimiento[1]);
    carousel.insertAdjacentElement("afterbegin", movimiento[2]);
    carousel.insertAdjacentElement("afterbegin", movimiento[3]);
    carousel.insertAdjacentElement("afterbegin", movimiento[4]);
    carousel.insertAdjacentElement("afterbegin", movimiento[5]);
}


btDerecho.addEventListener("click", () => {
    if(stringUno.innerHTML <= 7){
        let numeroUno =  Number(stringUno.innerHTML);
        stringUno.innerHTML = numeroUno + 1;
    } else if(stringUno.innerHTML == 8){
        let numeroUno = Number(stringUno.innerHTML);
        stringUno.innerHTML = 1;
    }
    carousel.scrollLeft += carousel.offsetWidth + 20;
    next();
});
btIzquierdo.addEventListener("click", () => {
    if(stringUno.innerHTML > 1){
        let numeroUno = Number(stringUno.innerHTML);
        stringUno.innerHTML = numeroUno - 1;
    } else if(stringUno.innerHTML == 1){
        let numeroUno = Number(stringUno.innerHTML);
        stringUno.innerHTML = 8;
    } 
    carousel.scrollLeft -= carousel.offsetWidth + 20;
    prev();
});