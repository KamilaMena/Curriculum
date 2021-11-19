

/* SLIDER */

let slider = document.querySelector(".slider__contenedor")
let sliderind = document.querySelectorAll(".slider__content")
let contador = 1;
let width = sliderind[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    let width = sliderind[0].clientWidth;
})

setInterval(function(){
    slides()
}, intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .7s";
    contador++;

    if(contador == sliderind.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        }, 1500)
    }
}