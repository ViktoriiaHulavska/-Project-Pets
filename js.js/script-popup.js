

function togglePopup() {
   const popup = document.getElementById('popup');
   popup.classList.add('open');
   }
   
   
   function closePopup(){
      const popup = document.querySelector('.popup');
      popup.classList.remove('open');
   }
   
   
   const hamb = document.querySelector(".hamb");
   const headerPopup = document.querySelector(".header__popup");
   const menuNav = document.querySelector(".menu");
   
   hamb.addEventListener("click", HambHandler);
   
   function HambHandler(e){
      e.preventDefault();
      menuNav.classList.toggle("aktive");
      hamb.classList.toggle("click");
   }
   
   function renderPopup() {
      headerPopup.appendChild(menu);
   }
   

  
   
   