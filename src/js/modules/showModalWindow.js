const showModalWindow = () => {
  const modalSellDialog = document.querySelector('.modal-sell__dialog');
  const modalSellOverlay = document.querySelector('.modal-sell__overlay');
  const modalRentDialog = document.querySelector('.modal-rent__dialog');
  const modalRentOverlay = document.querySelector('.modal-rent__overlay');
  const modalNotifyDialog = document.querySelector('.modal-notify__dialog');
  const modalNotifyOverlay = document.querySelector('.modal-notify__overlay');
  const modalTest = document.querySelector('.modal-test');
  const modalInfoDialog = document.querySelector('.modal-info__dialog');
  const modalInfoOverlay = document.querySelector('.modal-info__overlay');
  const slideOutput = document.querySelectorAll('.catalog__slide-select-input');
  const hiddenInput = document.querySelectorAll('.catalog__hidden');
  const hiddenInput2 = document.querySelector('.faq__tab-input-hidden');
  document.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.catalog__slide-button_sell')) {
      modalSellDialog.classList.add('modal-sell__dialog_visible');
      modalSellOverlay.classList.add('modal-sell__overlay_visible');
      target.parentElement.parentElement.children[3].children[0].setAttribute('form', 'sell-form');
      target.parentElement.children[0].children[0].setAttribute('form', 'sell-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.catalog__slide-button_rent')) {
      modalRentDialog.classList.add('modal-rent__dialog_visible');
      modalRentOverlay.classList.add('modal-rent__overlay_visible');
      target.parentElement.parentElement.children[3].children[0].setAttribute('form', 'rent-form');
      target.parentElement.children[1].children[0].setAttribute('form', 'rent-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.notify-btn')) {
      modalNotifyDialog.classList.add('modal-notify__dialog_visible');
      modalNotifyOverlay.classList.add('modal-notify__overlay_visible');
      target.children[0].setAttribute('form', 'notify-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.faq__tab-link')) {
      modalRentDialog.classList.add('modal-rent__dialog_visible');
      modalRentOverlay.classList.add('modal-rent__overlay_visible');
      target.children[0].setAttribute('form', 'rent-form');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.test-btn')) {
      modalTest.classList.add('modal-test_is-open');
      document.body.classList.add('scroll-hidden');
    }
    if (target.matches('.modal-sell__overlay') || target.matches('.modal-sell__close') ||
        target.matches('.modal-rent__overlay') || target.matches('.modal-rent__close') ||
        target.matches('.modal-notify__overlay') || target.matches('.modal-notify__close') ||
        target.matches('.modal-info__overlay') || target.matches('.modal-info__close') ||
        target.matches('.modal-test') || target.matches('.modal-test__close')) {
      modalSellDialog.classList.remove('modal-sell__dialog_visible');
      modalSellOverlay.classList.remove('modal-sell__overlay_visible');
      modalRentDialog.classList.remove('modal-rent__dialog_visible');
      modalRentOverlay.classList.remove('modal-rent__overlay_visible');
      modalNotifyDialog.classList.remove('modal-notify__dialog_visible');
      modalNotifyOverlay.classList.remove('modal-notify__overlay_visible');
      // modalInfoDialog.classList.remove('modal-info__dialog_visible');
      // modalInfoOverlay.classList.remove('modal-info__overlay_visible');
      modalTest.classList.remove('modal-test_is-open');
      document.body.classList.remove('scroll-hidden');
      slideOutput.forEach(item => {
        item.removeAttribute('form');
      });
      hiddenInput.forEach(item => {
        item.removeAttribute('form');
      });
      hiddenInput2.removeAttribute('form');
    }
  });
};

export default showModalWindow;
