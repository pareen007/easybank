const menu = document.querySelector('.nav__right-menu');
const toggle = document.querySelector('.nav__center');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('menu-toggle');
})