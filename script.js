// Menu Mobile
const btnAbrirMenu = document.getElementById('btn-abrir-menu');
const btnFecharMenu = document.getElementById('btn-fechar-menu');
const menuMobile = document.getElementById('menu-mobile-content');
const overlay = document.getElementById('overlay-menu');

// Abrir menu
btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('active');
    overlay.classList.add('active');
    btnAbrirMenu.classList.add('active');
});

// Fechar menu
btnFecharMenu.addEventListener('click', () => {
    fecharMenu();
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
    fecharMenu();
});

// Fechar menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

function fecharMenu() {
    menuMobile.classList.remove('active');
    overlay.classList.remove('active');
    btnAbrirMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}


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
    carouselSlide.style.transition = "transform 0.7s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Formulário de contato
const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    formContato.reset();
});