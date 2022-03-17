const btnMenuHamburger = document.querySelector('.block-menu-hamburger');
const blockMenuItems  = document.querySelectorAll('.block-menu');

btnMenuHamburger.addEventListener('click', () => {
    blockMenuItems.classList.toggle('block-menu-block');

})