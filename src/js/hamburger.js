export const hamburger = () => {
    const burger = document.querySelector('.hamburger');

    const iconBurger = document.querySelector('.fa-bars');
    const iconClose = document.querySelector('.fa-times');
    const menu = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        iconBurger.classList.toggle('show');
        iconClose.classList.toggle('show');
        menu.classList.toggle('show');
    })
}