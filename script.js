// Menu Mobile
const btnMobile = document.querySelector('.btn-abrir-menu');
const menuMobile = document.querySelector('.menu-mobile ul');
const overlay = document.querySelector('.overlay-menu');

btnMobile.addEventListener('click', () => {
    menuMobile.style.left = '0';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.btn-close').addEventListener('click', () => {
    menuMobile.style.left = '-100%';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    menuMobile.style.left = '-100%';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Efeito de rolagem no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('rolagem', window.scrollY > 100);
});

// Carrossel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Botões do carrossel
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Loop infinito
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Auto-slide
let interval = setInterval(() => {
    nextBtn.click();
}, 5000);

// Pausar no hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carouselContainer.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        nextBtn.click();
    }, 5000);
});

// Formulário de contato
const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    formContato.reset();
});