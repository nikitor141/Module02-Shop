(()=>{"use strict";document.querySelector(".burger").addEventListener("click",(()=>{let e=[(void 0).querySelector(".burger__body"),document.body,document.querySelector(".header__menu-list")];e.forEach((e=>{e.classList.toggle("active")})),document.querySelector(".header__menu-list").classList.contains("active")&&document.querySelector(".header__menu").addEventListener("click",(t=>{t.target.closest(".header__menu-link")&&e.forEach((e=>{e.classList.remove("active")}))}))}))})();