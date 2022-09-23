// $(function(){
//  $('.our__pets__slider').slick({
//     slidesToShow: 3,
//     variableWidth: true,
//  });
// });

// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeut = 800;

// if(popupLinks.length > 0){
//   for (popupLinks.length = 0; index < popupLinks.length; index++) {
//    const popupLink = popupLinks[index];
//    popupLink.addEventListener("click",function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//       e.preventDefault();
//    });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if(popupCloseIcon.length > 0){
//    for(let index = 0; index< popupCloseIcon.length; index++) {
//       const el = popupCloseIcon[index];
//       el.addEventListener('click', function (e) {
//          popupClose(el.closest('popup'));
//          e.preventDefault();
//       });
//    }
// }


// function popupOpen(curentPopup) {
//    if(curentPopup && unlock){
//       const popupActive = document.querySelector('.popup.open');
//       if(popupActive){
//          popupClose(popupActive, false);
//       } else {
//          bodyLock();
//       }
//       curentPopup.classList.add('open');
//       curentPopup.addEventListener('click', function (e){
//          if(!e.target.closest('.popup-content')){
//             popupClose(e.target.closest('.popup'));
//          }
//       })
//    }

// }

// function bodyLock(){
//    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// }


// const popupLinks = document.querySelectorAll('.popup-link');
// const popup = document.querySelector('#popup');
// const lockPadding = document.body;


// popupLinks.addEventListener('click', hambHandler);

// function hambHandler(e){
//    e.preventDefault();
//    popup.classList.toggle('open')
// }

// body.classList.toggle('noscroll');


function togglePopup() {
   console.log('hfdjfh');
const popup = document.getElementById('popup');
popup.classList.add('open');
}


function closePopup(){
   console.log('hfh');
   const popup = document.querySelector('.popup');
   popup.classList.remove('open');
}
