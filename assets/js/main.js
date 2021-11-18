/*// NAVBAR


$(document).ready(main);

    var contador = 1;

    function main() {
        $('.menu').click(function(){
            $('navbar__items').toggle();
        });
    }

/*('document').ready(function($) {
    var menubtn = $('.menu');
    menu1 = $('.navbar__menu');

    menubtn.click(function() {
        if(menu1.hasClass('show')) {

            menu1.removeClass('show');
        } else {
            menu1.addClass('show');
        }
    });
});*/

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