window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = 'none';
});
//Custom Build Section Slider
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
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
        const iframe = document.querySelector("#rajputanaVideo");
        const iframeSrc = iframe.src;
        console.log(iframeSrc);
        iframe.setAttribute("src", "");
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
            //Modal Display flex
            const styles = {
                display: 'flex'
            }
            Object.assign(modal.style, styles);
            //modal.classList.add("zoomIn");

            //Set iframe src
            iframe.setAttribute("src", iframeSrc);



        }

        function closeModal(e) {

            if (e.target == modal || e.target == close) {
                //Modal display none
                const styles = {
                    display: 'none',
                }
                Object.assign(modal.style, styles);

                //Remove iframe src to null
                let iframe = document.querySelector("#rajputanaVideo");
                let url = iframe.getAttribute("src");

                iframe.setAttribute("src", "");

            }
        }

    }


    //Call Video Modal
    VIDEO_MODAL();

    //Call Custom Build Slider
    CUSTOM_BUILD_SLIDER();

});

const TABS = (tabHolder, tabClass, tabContentClass) => {
const container = document.querySelector(tabHolder);
const btns = document.querySelectorAll(tabClass);

//Hide all the Tab Contents
let tabcontent = document.querySelectorAll(tabContentClass);


// Display : Block / None according to Tab Data-Attribute
btns.forEach((item) => {
    item.addEventListener("click", () => {

        let attr = item.getAttribute("data-tab");

        tabcontent.forEach(item => {
            if (item.id === attr) {

                item.style.display = "block";
                item.classList.add("current");

            } else {
                item.style.display = "none";
                item.classList.remove("current");
            }
        })

    })
})

//Tab Buttons Active/Deactive Class Add/Remove
btns.forEach((i) => {
    i.addEventListener("click", () => {

        btns.forEach(j => j.classList.remove("active"))

        i.classList.add("active");

    });
});
}

// Call the function
TABS("#btn_container", ".btn", ".tab-content");



//Banner Slide
new Splide( '.banner__splide', {
    type  : 'fade',
    rewind: true,
} ).mount();

//Blog Slider
new Splide( '.splide', {
    perPage: 3,
    rewind : true,
} ).mount();


//Mobile Menu
const mobileSlideMenu = document.getElementById("mobile-slide-menu");
const menuToggler = document.getElementById("menuToggle");

menuToggler.addEventListener("click", mobileSlide);

function mobileSlide(){
    mobileSlideMenu.style.transform = 'translateX(0px)';
    menuToggler.classList.toggle("close");

    if(!menuToggle.classList.contains("close")){
        mobileSlideMenu.style.transform = 'translateX(-400px)';
    }

}

