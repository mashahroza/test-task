const body =document.querySelector('body');
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.side-menu-section');
const modalBox = document.querySelector('.modal-box');

menuBtn.addEventListener('click', onMenuBtn)
function onMenuBtn () {
    menuBtn.classList.toggle('menu__btn--active');
    menu.classList.toggle('mobile-menu--active');
    modalBox.classList.toggle('modal--active');

    if (menu.classList.contains('mobile-menu--active')) {
        body.classList.toggle('hidden');
    }
    
    else if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
    }
}