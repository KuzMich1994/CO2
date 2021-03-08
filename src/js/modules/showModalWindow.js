const showModalWindow = () => {
  const modalSellDialog = document.querySelector('.modal-sell__dialog');
  const modalSellOverlay = document.querySelector('.modal-sell__overlay');
  const modalRentDialog = document.querySelector('.modal-rent__dialog');
  const modalRentOverlay = document.querySelector('.modal-rent__overlay');
  const slideOutput = document.querySelectorAll('.catalog__slide-select-input');
  const hiddenInput = document.querySelectorAll('.catalog__hidden');
  document.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.catalog__slide-button_sell')) {
      modalSellDialog.classList.add('modal-sell__dialog_visible');
      modalSellOverlay.classList.add('modal-sell__overlay_visible');
      target.parentElement.parentElement.children[3].children[0].setAttribute('form', 'sell-form');
      target.parentElement.children[0].children[0].setAttribute('form', 'sell-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.catalog__slide-button_rent') || target.matches('.faq__tab-link')) {
      modalRentDialog.classList.add('modal-rent__dialog_visible');
      modalRentOverlay.classList.add('modal-rent__overlay_visible');
      target.parentElement.parentElement.children[3].children[0].setAttribute('form', 'rent-form');
      target.parentElement.children[1].children[0].setAttribute('form', 'rent-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.modal-sell__overlay') || target.matches('.modal-sell__close') ||
        target.matches('.modal-rent__overlay') || target.matches('.modal-rent__close')) {
      modalSellDialog.classList.remove('modal-sell__dialog_visible');
      modalSellOverlay.classList.remove('modal-sell__overlay_visible');
      modalRentDialog.classList.remove('modal-rent__dialog_visible');
      modalRentOverlay.classList.remove('modal-rent__overlay_visible');
      document.body.classList.remove('scroll-hidden');
      slideOutput.forEach(item => {
        item.removeAttribute('form');
      });
      hiddenInput.forEach(item => {
        item.removeAttribute('form');
      });
      console.log(target);
    }
  });
};

export default showModalWindow;
