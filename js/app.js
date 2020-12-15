//Splide Slider
//new Splide('.splide', {
//    type: 'fade',
//    rewind: true,
//}).mount();

//Modal
const playBtn = document.querySelector(".play-btn");
const modal = document.querySelector("#video-modal");
const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector("#close");

playBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function openModal() {
    const styles = {
        display: 'flex'
    }
    Object.assign(modal.style, styles);
}

function closeModal() {
    const styles = {
        display: 'none'
    }
    Object.assign(modal.style, styles);
}

//Custom Build Section Slider
window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slider-items").children;
    const prevSlide = document.querySelector(".left-slide");
    const nextSlide = document.querySelector(".next-btn");
    const totalSlide = slides.length;
    let index = 0;


    nextSlide.onclick = function () {
        next("next");
    }

    prevSlide.onclick = function () {
        next("prev");
    }

    function next(direction) {
        if (direction == "next") {
            index++;
            if (index == totalSlide) {
                index = 0;
            }
        } else {
            if (index == 0) {
                index = totalSlide - 1;
                console.log(index)
            } else {
                index--;
            }
        }

        //Add and Remove Active class 
        for (let i = 0; i < totalSlide; i++) {
            slides[i].classList.remove("active");
        }
        slides[index].classList.add("active");
    }
});
