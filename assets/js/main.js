document.addEventListener("DOMContentLoaded",(function(){var burger;document.querySelector(".menu-burger").addEventListener("click",(function(){var menu_burger_span,mobile_menu;this.classList.toggle("burger-active"),document.querySelector(".menu-burger__span").classList.toggle("active-span"),document.querySelector(".mobile-menu").classList.toggle("show")}))})),window.onload=function(){function map_init(){document.querySelector(".footer__map").style.display="block"}setTimeout(map_init,5e3)};