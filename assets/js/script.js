//NAVBAR TUKAR WARNA
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

//PANGGIL METHOD FANCYBOX
Fancybox.bind("[data-fancybox]", {
});

//PANGGIL METHOD ANIMATED ON SCROLL
AOS.init({
    duration: 1500
});

//TOGGLE UNTUK FAQ
const faqs = document.querySelectorAll('.faq');
faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});