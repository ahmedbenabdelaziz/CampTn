let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
    menu.classList.toggle("move");
};

var swiper = new Swiper(".categorySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    loop: true,  // Ajoutez cette ligne pour permettre au swiper de boucler
    spaceBetween: 15,  // Assurez-vous qu'il y a un espace constant entre les slides
});








var swiper = new Swiper(".selling-slider", {
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});




