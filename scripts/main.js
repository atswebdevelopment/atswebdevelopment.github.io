"use strict";

// let imagesWhyReached = false
// let whoAreWeReached = false
// let quotesReached = false
// let imagesWorkReached = false
// document.addEventListener('scroll', () => {
//   if (!imagesWhyReached) {
//     const imagesWhy = document.querySelector('.images-why');
//     const imagesWhyOffset = imagesWhy.getBoundingClientRect().top
//     const imagesWhyHeight = window.innerHeight / 10
//     if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
//       document.querySelector('.images-why').classList.add('active')
//       imagesWhyReached = true
//     }
//   } else if (!whoAreWeReached) {
//     const whoAreWe = document.querySelector('.who-are-we');
//     const whoAreWeOffset = whoAreWe.getBoundingClientRect().top
//     const whoAreWeHeight = window.innerHeight / 10
//     if (whoAreWeOffset - window.innerHeight + whoAreWeHeight < 0) {
//       document.querySelector('.who-are-we').classList.add('active')
//       whoAreWeReached = true
//     }
//   } else if (!quotesReached) {
//     const quotes = document.querySelector('.quote');
//     const quotesOffset = quotes.getBoundingClientRect().top
//     const quotesHeight = window.innerHeight / 10
//     if (quotesOffset - window.innerHeight + quotesHeight < 0) {
//       document.querySelector('.quote').classList.add('active')
//       quotesReached = true
//     }
//   } else if (!imagesWorkReached) {
//     const imagesWork = document.querySelector('.work-here');
//     const imagesWorkOffset = imagesWork.getBoundingClientRect().top
//     const imagesWorkHeight = window.innerHeight / 10
//     if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
//       document.querySelector('.work-here').classList.add('active')
//       imagesWorkReached = true
//     }
//   }
//   const cards = document.querySelectorAll('.card');
//   cards.forEach((card) => {
//     const cardsOffset = card.getBoundingClientRect().top
//     const cardsHeight = window.innerHeight / 100
//     if (cardsOffset - window.innerHeight + cardsHeight < 0) {
//       card.classList.add('active')
//     }
//   })
// })
window.addEventListener('scroll', function () {
  var logoCircle = document.querySelector('.brandcards__icon--desktop');

  if (logoCircle) {
    logoCircle.style.transform = 'rotateZ(' + window.scrollY / 4 + 'deg)';
  }
});
var burger = document.querySelectorAll('.header__hamburger');
burger.forEach(function (burgerItem, i) {
  burgerItem.addEventListener('click', function (e) {
    e.preventDefault();
    var navigation = document.querySelector('.navigation');
    navigation.classList.add('navigation--active');
  });
});
var play = document.querySelector('.video__button');
play.addEventListener('click', function (e) {
  e.preventDefault();
  play.classList.add('hidden');
  var video = document.querySelector('.video__video');
  video.classList.add('video__video--play');
  video.play();
  video.controls = true;
}); // const toViewRoles = () => {
//   setTimeout(() => {
//     const positions = document.querySelector('.positions');
//     let positionsOffset = positions.getBoundingClientRect().top
//     if (window.innerWidth < 767) {
//       positionsOffset += 100
//     }
//     if (positionsOffset > 110) {
//       window.scrollTo(0, window.scrollY + (positionsOffset / 50))
//       toViewRoles()
//     }
//   }, 1)
// }
// const toViewRolesLink = document.querySelector('.header__cta a')
// toViewRolesLink.addEventListener('click', () => {
//   toViewRoles()
// })
// const accordionContent = document.querySelectorAll('.accordion__content')
// accordionContent.forEach((accordion) => {
//   accordion.height = accordion.offsetHeight + 'px'
//   accordion.style.maxHeight = '0px'
// })
// const accordionHeader = document.querySelectorAll('.accordion__header')
// accordionHeader.forEach((accordion, i) => {
//   accordion.addEventListener('click', () => {
//     accordionContent[i].style.maxHeight = accordionContent[i].style.maxHeight === '0px' ? accordionContent[i].height : '0px'
//     accordion.parentElement.classList.toggle('active')
//   })
// })

var splides = document.querySelectorAll('.splide');
splides.forEach(function (e, i) {
  var perMove = 1;
  var focus = 'center';
  var trimSpace = true;
  var arrows = false;
  var height = 526;
  var type = 'slide';
  var fixedWidth = 526;
  var pagination = false;
  var arrowPath = "m 0,0 c -0.187,0 -0.364,0.073 -0.497,0.206 -0.268,0.287 -0.268,0.75 0.008,1.045 l 9.024,9.216 -8.712,8.92 c -0.271,0.289 -0.271,0.749 0.004,1.042 0.125,0.125 0.301,0.198 0.489,0.198 0.188,0 0.364,-0.073 0.497,-0.206 l 9.202,-9.396 c 0.288,-0.299 0.288,-0.77 0,-1.07 L 0.493,0.202 C 0.364,0.073 0.188,0 0,0";

  if (e.classList.contains('splide--brandcards') && window.innerWidth < 985) {
    height = 380;
    fixedWidth = 280;
    pagination = true;
    arrows = true;
    arrowPath = "M21,6.53H.5a.5.5,0,0,1,0-1H21a.5.5,0,0,1,0,1,M14.15,11.83a.49.49,0,0,1,.16-.69L20.76,6,14.31.92a.49.49,0,0,1-.16-.69.5.5,0,0,1,.69-.15L22,5.61a.5.5,0,0,1,0,.84L14.84,12a.42.42,0,0,1-.26.08A.51.51,0,0,1,14.15,11.83Z";
  } else if (e.classList.contains('splide--quotes')) {
    fixedWidth = 0;
    height = 0;
    arrows = true;
    type = 'loop';
  } else if (window.innerWidth < 985) {
    height = 0;
    fixedWidth = 0;
  }

  var splide = new Splide(e, {
    type: type,
    arrows: arrows,
    height: height,
    fixedWidth: fixedWidth,
    perMove: perMove,
    focus: focus,
    trimSpace: trimSpace,
    pagination: pagination,
    arrowPath: arrowPath // breakpoints: {
    //     600: {
    //         perPage: 2,
    //         height : '6rem',
    //     }
    // }

  }).mount();

  if (e.classList.contains('splide--quotes')) {
    var indNo = document.querySelector('.indicator__number');
    var indTot = document.querySelector('.indicator__total');
    splide.on('move', function (newIndex) {
      indNo.innerHTML = newIndex + 1;
    });
    indNo.innerHTML = 1;
    indTot.innerHTML = splide.length;
  }
});
//# sourceMappingURL=main.js.map
