const dropdownSelect = () => {
  const slide = document.querySelectorAll('.catalog__slide');

  slide.forEach(item => {
    item.addEventListener('click', e => {
      const target = e.target;
      const ul = item.querySelector('.catalog__slide-select-ul');
      const output = item.querySelector('.catalog__slide-select-input');

      if (target.matches('.catalog__slide-select')) {
        ul.classList.toggle('catalog__slide-select-ul_active');
        // output.setAttribute('form', 'sell-form');
      }
      if (target.matches('.catalog__slide-select-cost')) {
        output.value = target.textContent;
        ul.classList.remove('catalog__slide-select-ul_active');
        console.log(target.textContent);
      }
    });
  });
};

export default dropdownSelect;
