// Navbar sticky
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

// Carousel de imagenes
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

// Mensaje formulario
function mensaje_formulario(form) {
    window.alert("¡Su sesión ha sido agendada correctamente!\nPor favor cumpla con la hora y fecha seleccionada.");
}

// buscarTabla
function buscarTabla() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// filtrarLista
function filtrarLista() {
    const dropdown = document.getElementById('nameDropdown');
    const selectedName = dropdown.value;
    const listItems = document.querySelectorAll('#nameList li');

    listItems.forEach(item => {
        if (selectedName === 'Todos' || item.getAttribute('data-name') === selectedName) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
}
