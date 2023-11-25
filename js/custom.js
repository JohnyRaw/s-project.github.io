var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: '3',
    spaceBetween: 210,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.ourproject__content-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})
document.addEventListener("DOMContentLoaded", function () {
    var contactBtn = document.querySelector('.contactus-btn');
    var contactsSection = document.getElementById('contacts');
    if (contactBtn && contactsSection) {
        contactBtn.addEventListener('click', function () {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var contactBtn = document.querySelector('.cta__git-services');
    var contactsSection = document.getElementById('services');
    if (contactBtn && contactsSection) {
        contactBtn.addEventListener('click', function () {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});