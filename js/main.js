const burgerItem = document.querySelector('.header__btn');
const menu = document.querySelector('.header__nav-list');
const menuCloseItem = document.querySelector('.header__close');
let isOpenMenu = false;

const toggleMenu = () => {
    menu.classList.toggle('header__nav-list--active');
    isOpenMenu = !isOpenMenu;
}


burgerItem.addEventListener('click', () => {
    toggleMenu();
});
menuCloseItem.addEventListener('click', () => {
    toggleMenu();
});

document.addEventListener('click', (e) => {
    if (isOpenMenu && e.target != burgerItem) {
        toggleMenu();
    }
});