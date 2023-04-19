import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

const allSliders = document.querySelectorAll('.swiper');

allSliders.forEach(slider => {
   const swiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
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
      breakpoints: {
         1025: {
            slidesPerView: 3
         },
         531: {
            slidesPerView: 2

         }
      }
   });
});


document.querySelector('.burger').addEventListener('click', function () {
   let elmsToActive = [this, document.body, document.querySelector('.header__menu-list')];
   elmsToActive.forEach(item => {
      item.classList.toggle('active');
   });
   if (document.querySelector('.header__menu-list').classList.contains('active')) {
      document.querySelector('.header__menu').addEventListener('click', e => {
         if (e.target.closest('.header__menu-link')) {
            elmsToActive.forEach(item => {
               item.classList.remove('active');
            });
         }
      });
      document.addEventListener('click', e => {
         if (!e.target.closest('.header__menu')) {
            elmsToActive.forEach(item => {
               item.classList.remove('active');
            });
         }
      });
   }
});

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
      if (e.target.contains(minus)) {
         if (window.innerWidth <= 530 && input.value == 1) {
            counter.style.display = 'none';
         }
         if (val > input.min && val <= 99) {
            val--;
            input.value = val;
         }
      }
      if (e.target.contains(plus) && val >= input.min && val < 99) {
         val++;
         input.value = val;
      }
   })
});

let styles = () => {
   if (window.innerWidth >= 1024) {
      let bgShiftingEl = document.querySelector('.fullscreen');
      bgShiftingEl.addEventListener('mousemove', e => {
         let x = e.clientX;
         let y = e.clientY;
         let ratio = 0.002;

         bgShiftingEl.style.backgroundPosition = `${69 + x * ratio}rem -4.5rem, right ${-2 + x * ratio}rem top ${4.4 + y * ratio}rem, right ${12.2 + x * ratio}rem bottom ${0 + y * ratio}rem, left 0 bottom ${4.7 + y * ratio}rem, ${3.8 + x * ratio}rem 40%`;
         bgShiftingEl.style.transition = 'background-position .6s ease-out';
      });
      bgShiftingEl.addEventListener('mouseout', () => {
         bgShiftingEl.removeAttribute('style')
      });

      document.querySelectorAll('.offer__card-content').forEach(item => {
         let titleRemHeight = item.querySelector('.offer__card-title').offsetHeight / 10;
         item.style.transform = `translateY(calc(100% - ${titleRemHeight}rem))`;
      });
   }
   else {
      document.querySelectorAll('.offer__card-content').forEach(item => {
         item.removeAttribute('style');
      });
   }
   if (window.innerWidth <= 530) {
      document.querySelectorAll('.product-card').forEach(productCard => {
         const button = productCard.querySelector('.product-card__button');
         const counter = productCard.querySelector('.product-card__counter');
         button.addEventListener('click', () => {
            counter.style.display = 'flex';
         });

      });
   }
}
styles();
window.addEventListener('resize', () => {
   styles();
})