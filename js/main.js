const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.header-content__list')

btn.addEventListener('click', function() {
    menu.classList.toggle('header-content__list--active')
})