if (window.innerWidth <= 900) {
  const mobMenuBtn = document.getElementById('mob-menu__button');
  const basicMenu = document.querySelector('.header__menu');

  mobMenuBtn.addEventListener('click', () => {
    if (mobMenuBtn.classList.contains('mob-menu_open')) {
      mobMenuBtn.classList.remove('mob-menu_open');
      mobMenuBtn.classList.add('mob-menu_close');
      if (basicMenu.classList.contains('header__mob-menu_showed')) {
        basicMenu.classList.remove('header__mob-menu_showed');
      }
    } else {
      mobMenuBtn.classList.remove('mob-menu_close');
      mobMenuBtn.classList.add('mob-menu_open');
      basicMenu.classList.add('header__mob-menu_showed');
    }
  });

// Close menu on click to another elements

  document.querySelectorAll('.menu-item').forEach( (menuItem) => {
    menuItem.addEventListener('click', () => {
      mobMenuBtn.classList.remove('mob-menu_open');
      mobMenuBtn.classList.add('mob-menu_close');
      if (basicMenu.classList.contains('header__mob-menu_showed')) {
        basicMenu.classList.remove('header__mob-menu_showed');
      }
    });
  });

}



