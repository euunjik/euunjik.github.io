'use strict'

const $hamburger = document.getElementById('hamburger');
$hamburger.addEventListener('click',(evt) => {
    const $logo = document. querySelector('.container .container.title');
    const $menu = document.querySelector('.container .container.menu');
    const $icon = document.querySelector('container .container.icon');

    $logo.classList.toggle('active');
    $menu.classList.toggle('active');
    $icon.classList.toggle('active');


});