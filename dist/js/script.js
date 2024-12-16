// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        setTimeout(function() {
            navMenu.classList.add('block');
        }, 10); // Memberikan jeda sebentar agar transisi dapat terjadi
    } else {
        navMenu.classList.remove('block');
        setTimeout(function() {
            navMenu.classList.add('hidden');
        }, 300); // Mengatur jeda sesuai dengan durasi transisi pada CSS
    }
});


// Navbar Fixed

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }

    var sections = document.querySelectorAll('section');
    var navbarLinks = document.querySelectorAll('#nav-menu a');
    var scrollPosition = window.scrollY;

    sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;

        // Mengatur animasi fade-in pada bagian saat halaman sesuai
        if (scrollPosition >= top - window.innerHeight / 2 && scrollPosition < top + height) {
            section.classList.add('active');
        }

        // Menambahkan efek animasi ke navigasi saat digulir
        if (scrollPosition >= top && scrollPosition < top + height) {
            navbarLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            navbarLinks[index].classList.add('active');
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Set timeout untuk memicu animasi setelah halaman dimuat
    setTimeout(() => {
        // Mengubah opacity dan transformasi untuk memicu animasi fade in
        document.getElementById('home').style.opacity = '1';
        document.getElementById('home').style.transform = 'translateY(0)';
    }, 100);
})