var get_slider = document.getElementById("slider-container");
var i = document.querySelectorAll(".slider-container .slider-img");

var index = 0;
var d = 0;

function carousel_effect() {
        d += i[index].offsetWidth;

        if (index >= i.length - 3) 
        {
            index = 0;
            d = 0;
        }
        
        get_slider.style.transform = `translate(-${d}px, 0px)`;
        index++;
}

setInterval(() => carousel_effect(), 2000);