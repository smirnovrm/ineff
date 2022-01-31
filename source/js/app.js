window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.main-menu__button');
  const mainMenu = document.querySelector('.main-menu__list');

  menuButton.addEventListener('click', (event) => {
    mainMenu.classList.toggle('main-menu__list--opened')
  });

  try {

    const tabs = document.querySelectorAll('.tabs__control');
    const contents = document.querySelectorAll('.tabs__content');

    tabs.forEach((tab, index, parent) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        parent.forEach(item => {
          item.classList.remove('tabs__control--active');
        });
        contents.forEach(item => {
          item.classList.remove('tabs__content--active');
        });
        tab.classList.add('tabs__control--active');
        contents[index].classList.add('tabs__content--active');
      });
    });

    const modalButton = document.querySelector('#modal');
    const closeModalButton = document.querySelector('#close-modal');
    const modal = document.querySelector('.modal');

    modalButton.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal--hide');
      document.body.style.overflow = 'hidden';
    });

    closeModalButton.addEventListener('click', () => {
      modal.classList.add('modal--hide');
      document.body.style.overflow = '';
    });
  }catch (error) {
    // console.log(error.text);
  }

});
