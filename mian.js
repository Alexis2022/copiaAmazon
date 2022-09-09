const fila = document.querySelectorAll(".carousel");
const imagenes = document.querySelector(".img");

let flechaRight = document.querySelectorAll(".bt-derecho");
let flechaLeft = document.querySelectorAll(".bt-izquierdo");


flechaRight[0].addEventListener("click", ()=> fila[0].scrollLeft += fila[0].offsetWidth);
flechaRight[1].addEventListener("click", ()=> fila[1].scrollLeft += fila[1].offsetWidth);
flechaRight[2].addEventListener("click", ()=> fila[2].scrollLeft += fila[2].offsetWidth);
flechaRight[3].addEventListener("click", ()=> fila[3].scrollLeft += fila[3].offsetWidth);
flechaRight[4].addEventListener("click", ()=> fila[4].scrollLeft += fila[4].offsetWidth);
flechaRight[5].addEventListener("click", ()=> fila[5].scrollLeft += fila[5].offsetWidth);
flechaRight[6].addEventListener("click", ()=> fila[6].scrollLeft += fila[6].offsetWidth);



flechaLeft[0].addEventListener("click", ()=> fila[0].scrollLeft -= fila[0].offsetWidth);
flechaLeft[1].addEventListener("click", ()=> fila[1].scrollLeft -= fila[1].offsetWidth);
flechaLeft[2].addEventListener("click", ()=> fila[2].scrollLeft -= fila[2].offsetWidth);
flechaLeft[3].addEventListener("click", ()=> fila[3].scrollLeft -= fila[3].offsetWidth);
flechaLeft[4].addEventListener("click", ()=> fila[4].scrollLeft -= fila[4].offsetWidth);
flechaLeft[5].addEventListener("click", ()=> fila[5].scrollLeft -= fila[5].offsetWidth);
flechaLeft[6].addEventListener("click", ()=> fila[6].scrollLeft -= fila[6].offsetWidth);


flechaLeft[0].classList.add("hover");
flechaRight[0].classList.add("hover");

fila[1].addEventListener("mouseover", ()=>{
    flechaLeft[1].classList.add("hover");
    flechaRight[1].classList.add("hover");
});
fila[1].addEventListener("mouseout", ()=>{
    flechaLeft[1].classList.remove("hover");
    flechaRight[1].classList.remove("hover");
});
fila[2].addEventListener("mouseover", ()=>{
    flechaLeft[2].classList.add("hover");
    flechaRight[2].classList.add("hover");
});
fila[2].addEventListener("mouseout", ()=>{
    flechaLeft[2].classList.remove("hover");
    flechaRight[2].classList.remove("hover");
});
fila[3].addEventListener("mouseover", ()=>{
    flechaLeft[3].classList.add("hover");
    flechaRight[3].classList.add("hover");
});
fila[3].addEventListener("mouseout", ()=>{
    flechaLeft[3].classList.remove("hover");
    flechaRight[3].classList.remove("hover");
});
fila[4].addEventListener("mouseover", ()=>{
    flechaLeft[4].classList.add("hover");
    flechaRight[4].classList.add("hover");
});
fila[4].addEventListener("mouseout", ()=>{
    flechaLeft[4].classList.remove("hover");
    flechaRight[4].classList.remove("hover");
});
fila[5].addEventListener("mouseover", ()=>{
    flechaLeft[5].classList.add("hover");
    flechaRight[5].classList.add("hover");
});
fila[5].addEventListener("mouseout", ()=>{
    flechaLeft[5].classList.remove("hover");
    flechaRight[5].classList.remove("hover");
});
fila[6].addEventListener("mouseover", ()=>{
    flechaLeft[6].classList.add("hover");
    flechaRight[6].classList.add("hover");
});
fila[6].addEventListener("mouseout", ()=>{
    flechaLeft[6].classList.remove("hover");
    flechaRight[6].classList.remove("hover");
});

