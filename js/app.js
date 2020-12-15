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
        const iframe = document.querySelector("#rajputanaVideo");
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
            let url = iframe.getAttribute("src");

            iframe.setAttribute("src", url);


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

        //Video Stop
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var url = document.querySelector("#rajputanaVideo").getAttribute("id");

        /* Assign empty url value to the iframe src attribute when
        modal hide, which stop the video playing */
        $("#exampleModalCenter").on('hide.bs.modal', function () {
            $("#modalVideo").attr('src', '');
        });

        /* Assign the initially stored url back to the iframe src
        attribute when modal is displayed again */
        $("#exampleModalCenter").on('show.bs.modal', function () {
            $("#modalVideo").attr('src', url);
        });


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
