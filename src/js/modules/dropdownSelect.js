const dropdownSelect = () => {
  const slide = document.querySelectorAll('.catalog__slide');

  slide.forEach(item => {
    item.addEventListener('click', e => {
      const target = e.target;
      const ul = item.querySelector('.catalog__slide-select-ul');
      const output = item.querySelector('.catalog__slide-select-input');

      const closeSelect = target => {
        ul.style.height = '0px';
        target.classList.remove('catalog__slide-select_active');
        ul.addEventListener('transitionend', () => {
          ul.classList.remove('catalog__slide-select-ul_active');
        }, { once: true });
      };

      if (target.matches('.catalog__slide-select')) {
        if (!ul.classList.contains('catalog__slide-select-ul_active')) {
          ul.classList.add('catalog__slide-select-ul_active');
          target.classList.add('catalog__slide-select_active');
          ul.style.height = 'auto';
          const height = ul.clientHeight + 'px';
          ul.style.height = '0px';
          setTimeout(() => {
            ul.style.height = height;
          }, 0);
        } else {
          closeSelect(target);
        }
      }
      if (target.matches('.catalog__slide-select-cost')) {
        if (ul.classList.contains('catalog__slide-select-ul_active')) {
          target.parentElement.parentElement.parentElement.classList.remove('catalog__slide-select_active');
          closeSelect(target);
          output.value = target.textContent;
        }
      }
    });
  });
};

export default dropdownSelect;
