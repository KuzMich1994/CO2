import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../index.html';
import '../css/style.css';
import '../sass/style.sass';
import dropdownSelect from './modules/dropdownSelect';
import showModalWindow from './modules/showModalWindow';
import sendForm from './modules/sendForm';
import showMobileMenu from './modules/showMobileMenu';

const swiper = new Swiper('.catalog__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 24,
  width: 1831,
  breakpoints: {
    1921: {
      slidesPerView: 5,
      // spaceBetween: 70
    },
    993: {
      width: 1831
    },
    320: {
      width: 1150,
      slidesPerView: 4
    }
  },

  // If we need pagination
  pagination: {
    el: '.catalog__slide-pagination',
    bulletClass: 'catalog__slide-pagination-bullet',
    bulletActiveClass: 'catalog__slide-pagination-bullet_active',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.catalog__slide-arrow_next',
    prevEl: '.catalog__slide-arrow_prev',
  },
});

swiper.init();

dropdownSelect();
showModalWindow();
sendForm();
showMobileMenu();
