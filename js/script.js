window.onscroll = function () { stickyNavbar() };

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
