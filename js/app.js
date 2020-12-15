//Custom Build Section Slider
window.addEventListener("DOMContentLoaded", () => {
    //Custom Build Slider
    const CUSTOM_BUILD_SLIDER = () => {
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
    }


    //Modal
    const VIDEO_MODAL = () => {

        const playBtn = document.querySelector(".play-btn");
        const modal = document.querySelector("#video-modal");
        const modalContainer = document.querySelector(".modal-container");
        const close = document.querySelector("#close");

        playBtn.addEventListener("click", openModal);
        modal.addEventListener("click", closeModal, false);
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 27 && modal) {
                const styles = {
                    display: 'none',
                }

                Object.assign(modal.style, styles);
            }
        });

        function openModal() {
            const styles = {
                display: 'flex'
            }
            Object.assign(modal.style, styles);

            //modalContainer.style.animation = "zoomIn .3s linear forwards 5s";

        }

        function closeModal(e) {

            //modalContainer.style.animation = "zoomOut .3s linear forwards 5s";

            console.log(e);

            if (e.target == modal || e.target == close) {
                const styles = {
                    display: 'none',
                }

                Object.assign(modal.style, styles);

            }
        }

    }


    //Call Video Modal
    VIDEO_MODAL();

    //Call Custom Build Slider
    CUSTOM_BUILD_SLIDER();

});







//Splide Slider
//new Splide('.splide', {
//    type: 'fade',
//    rewind: true,
//}).mount();
