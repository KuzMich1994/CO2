const scrollPage = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 50) {
      header.classList.add('header_stickly');
    } else {
      header.classList.remove('header_stickly');
    }
  });
};

export default scrollPage;
