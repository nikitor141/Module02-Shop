import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper(".offerSwiper", {
   modules: [Navigation, Pagination],
   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


document.querySelector('.burger').addEventListener('click', function () {
   let elmsToActive = [this.querySelector('.burger__body'), document.body, document.querySelector('.header__menu-list')];
   elmsToActive.forEach(item => {
      item.classList.toggle('active');
   })
   if (document.querySelector('.header__menu-list').classList.contains('active')) {
      document.querySelector('.header__menu').addEventListener('click', e => {
         if (e.target.closest('.header__menu-link')) {
            elmsToActive.forEach(item => {
               item.classList.remove('active');
            })
         }
      })
   }
})

document.querySelectorAll('.offer__card-content').forEach(item => {
   let titleRemHeight = item.querySelector('.offer__card-title').offsetHeight / 10;
   item.style.transform = `translateY(calc(100% - ${titleRemHeight}rem))`;
})