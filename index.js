'use strict';

// Navigation Section
const mblMenu = document.querySelector('#mbl_menu');
const navPanel = document.querySelector('#nav_panel');


// Event for Mobile Menu
mblMenu.addEventListener('click', () => {
    navPanel.classList.toggle('hidden');
    mblMenu.classList.toggle('active');
    navPanel.classList.toggle('nav--active');
});