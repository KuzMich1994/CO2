import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Inputmask from "inputmask";
import '../index.html';
import '../css/style.css';
import '../sass/style.sass';
import dropdownSelect from './modules/dropdownSelect';
import showModalWindow from './modules/showModalWindow';
import sendForm from './modules/sendForm';
import showMobileMenu from './modules/showMobileMenu';
import toggleTabs from './modules/toggleTabs';
import scrollPage from './modules/scrollPage';
import scrollToBlock from './modules/scrollToBlock';
import scrollLinks from './modules/scrollLinks';
import showModalInfo from './modules/showModalInfo';

const swiper = new Swiper('.catalog__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 24,
  width: 1831,
  speed: 600,
  shortSwipes: false,
  breakpoints: {
    1921: {
      slidesPerView: 5,
      width: 1900,
      spaceBetween: 20
    },
    993: {
      width: 1831
    },
    320: {
      shortSwipes: true,
      width: 1150,
      slidesPerView: 4,
      spaceBetween: 12
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

const inputPhone = document.querySelectorAll('[name="phone"]');

const maskPhone = new Inputmask('+7 (999) 999-99-99', {
  showMaskOnHover: false
});

maskPhone.mask(inputPhone);

dropdownSelect();
showModalWindow();
sendForm();
showMobileMenu();
toggleTabs();
scrollPage();
scrollToBlock();
scrollLinks();
showModalInfo();
