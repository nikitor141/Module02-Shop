import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

const allSliders = document.querySelectorAll('.swiper');

allSliders.forEach(slider => {
   const swiper = new Swiper(slider, {
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
document.querySelectorAll('.product-card__counter').forEach(counter => {
   const minus = counter.querySelector('.product-card__counter-button--minus');
   const plus = counter.querySelector('.product-card__counter-button--plus');
   const input = counter.querySelector('.product-card__counter-input');

   let val = input.value;

   input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d]/g, '');
      val = input.value;
      if (val.length > input.maxLength) {
         input.value = input.value.slice(0, input.maxLength);
         val = input.value;
      }
   });
   input.addEventListener('blur', () => {
      if (val == '' || val == '0' || val == '00') input.value = '1';
      val = input.value;
   });

   counter.addEventListener('click', e => {
      if (e.target.contains(minus) && val > 1 && val <= 99) {
         val--;
         input.value = val;
      }
      if (e.target.contains(plus) && val >= 1 && val < 99) {
         val++;
         input.value = val;
      }
   })
});