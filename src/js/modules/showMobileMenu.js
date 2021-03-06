const showMobileMenu = () => {
  const mobileBtn = document.querySelector('.header__button');
  const mobileBtnLine = document.querySelectorAll('.header__button-line');
  const mobileBtnMask = document.querySelector('.header__button-mask');
  const mobileMenuOverlay = document.querySelector('.header__mobile-menu-overlay');
  const mobileMenu = document.querySelector('.header__mobile-menu');

  document.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.header__button') || target.matches('.header__button-line')) {
      mobileBtnLine.forEach(item => {
        item.classList.add('header__button-line_active');
      });
      mobileBtnMask.classList.add('header__button-mask_active');
      mobileMenuOverlay.classList.add('header__mobile-menu-overlay_active');
      mobileMenu.classList.add('header__mobile-menu_active');
      document.body.style.overflowY = 'hidden';
    }
    if (target.matches('.header__mobile-menu-overlay') || target.matches('.header__button-mask') ||
        target.matches('.header__link')) {
      mobileBtnLine.forEach(item => {
        item.classList.remove('header__button-line_active');
      });
      mobileBtnMask.classList.remove('header__button-mask_active');
      mobileMenuOverlay.classList.remove('header__mobile-menu-overlay_active');
      mobileMenu.classList.remove('header__mobile-menu_active');
      document.body.style.overflowY = 'scroll';
    }
  });
};

export default showMobileMenu;
