const showModalWindow = () => {
  const modalSellDialog = document.querySelector('.modal-sell__dialog');
  const modalSellOverlay = document.querySelector('.modal-sell__overlay');
  const slideOutput = document.querySelectorAll('.catalog__slide-select-input');
  const hiddenInput = document.querySelectorAll('.catalog__hidden');
  document.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.catalog__slide-button_sell')) {
      modalSellDialog.classList.add('modal-sell__dialog_visible');
      modalSellOverlay.classList.add('modal-sell__overlay_visible');
      target.parentElement.parentElement.children[3].children[0].setAttribute('form', 'sell-form');
      target.parentElement.children[0].children[0].setAttribute('form', 'sell-form');
    }
    if (target.matches('.modal-sell__overlay') || target.matches('.modal-sell__close')) {
      modalSellDialog.classList.remove('modal-sell__dialog_visible');
      modalSellOverlay.classList.remove('modal-sell__overlay_visible');
      slideOutput.forEach(item => {
        item.removeAttribute('form');
      });
      hiddenInput.forEach(item => {
        item.removeAttribute('form');
      });
    }
  });
};

export default showModalWindow;
