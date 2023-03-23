import './styles/main.scss';

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
