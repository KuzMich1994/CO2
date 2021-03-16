const toggleTabs = () => {
  const tabsWrapper = document.querySelector('.faq__wrapper');
  const tabWrapper = document.querySelectorAll('.faq__tab-wrapper');
  const tabButton = document.querySelectorAll('.faq__tab-button');
  const tabTitle = document.querySelectorAll('.faq__tab-title');
  const tabs = document.querySelectorAll('.faq__tab');

  const toggleTabContent = index => {
    for (let i = 0; i < tabWrapper.length; i++) {
      if (index === i) {
        tabButton[i].classList.toggle('faq__tab-button_is-open');
        tabTitle[i].classList.toggle('faq__tab-title_is-open');
        tabWrapper[i].classList.toggle('faq__tab-wrapper_is-open');
        tabs[i].classList.toggle('faq__tab_is-open');
      } else {
        tabWrapper[i].classList.remove('faq__tab-wrapper_is-open');
        tabButton[i].classList.remove('faq__tab-button_is-open');
        tabTitle[i].classList.remove('faq__tab-title_is-open');
        tabs[i].classList.remove('faq__tab_is-open');
      }
    }
  };

  tabsWrapper.addEventListener('click', e => {
    // let target = e.target;
    let target2 = e.target;
    // target = target.closest('.faq__tab-button');

    // if (target) {
    //   tabButton.forEach((item, i) => {
    //     if (item === target) {
    //       toggleTabContent(i);
    //     }
    //   });
    // }

    target2 = target2.closest('.faq__tab');
    if (target2) {
      tabs.forEach((item, i) => {
        if (item === target2) {
          toggleTabContent(i);
        }
      });
    }

    // if (target2.matches('.faq__tab-title')) {
    //   console.log(target2);
    //   tabTitle.forEach((item, i) => {
    //     if (item === target) {
    //       toggleTabContent(i);
    //     }
    //   });
    // }

  });


};

export default toggleTabs;
