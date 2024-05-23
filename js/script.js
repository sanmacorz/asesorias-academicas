// Sticky navbar
window.onscroll = function () {
    stickyNavbar()
};

let navbar = document.getElementById("navbar");

function stickyNavbar() {
    if (window.scrollY >= navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Image carousel
$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });
});
