const toggleTabs = () => {
  const tabsWrapper = document.querySelector('.faq__wrapper');
  const tabWrapper = document.querySelectorAll('.faq__tab-wrapper');
  const tabButton = document.querySelectorAll('.faq__tab-button');
  const tabTitle = document.querySelectorAll('.faq__tab-title');

  const toggleTabContent = index => {
    for (let i = 0; i < tabWrapper.length; i++) {
      if (index === i) {
        tabButton[i].classList.toggle('faq__tab-button_is-open');
        tabTitle[i].classList.toggle('faq__tab-title_is-open');
        tabWrapper[i].classList.toggle('faq__tab-wrapper_is-open');
      } else {
        tabWrapper[i].classList.remove('faq__tab-wrapper_is-open');
        tabButton[i].classList.remove('faq__tab-button_is-open');
        tabTitle[i].classList.remove('faq__tab-title_is-open');
      }
    }
  };

  tabsWrapper.addEventListener('click', e => {
    let target = e.target;
    target = target.closest('.faq__tab-button');

    if (target) {
      tabButton.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  });
};

export default toggleTabs;
