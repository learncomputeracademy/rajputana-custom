//Splide Slider
new Splide('.splide', {
    type: 'fade',
    rewind: true,
}).mount();

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
