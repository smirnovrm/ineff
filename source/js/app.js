console.log('Hello');

const menuButton = document.querySelector('.main-menu__button');
const mainMenu = document.querySelector('.main-menu__list');

menuButton.addEventListener('click', (event) => {
  mainMenu.classList.toggle('main-menu__list--opened')
});
