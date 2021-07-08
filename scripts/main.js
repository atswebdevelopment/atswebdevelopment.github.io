"use strict";

// let imagesWhyReached = false
// let whoAreWeReached = false
// let quotesReached = false
// let imagesWorkReached = false
document.addEventListener('scroll', function () {
  // if (!imagesWhyReached) {
  //   const imagesWhy = document.querySelector('.images-why');
  //   const imagesWhyOffset = imagesWhy.getBoundingClientRect().top
  //   const imagesWhyHeight = window.innerHeight / 10
  //   if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
  //     document.querySelector('.images-why').classList.add('active')
  //     imagesWhyReached = true
  //   }
  // } else if (!whoAreWeReached) {
  //   const whoAreWe = document.querySelector('.who-are-we');
  //   const whoAreWeOffset = whoAreWe.getBoundingClientRect().top
  //   const whoAreWeHeight = window.innerHeight / 10
  //   if (whoAreWeOffset - window.innerHeight + whoAreWeHeight < 0) {
  //     document.querySelector('.who-are-we').classList.add('active')
  //     whoAreWeReached = true
  //   }
  // } else if (!quotesReached) {
  //   const quotes = document.querySelector('.quote');
  //   const quotesOffset = quotes.getBoundingClientRect().top
  //   const quotesHeight = window.innerHeight / 10
  //   if (quotesOffset - window.innerHeight + quotesHeight < 0) {
  //     document.querySelector('.quote').classList.add('active')
  //     quotesReached = true
  //   }
  // } else if (!imagesWorkReached) {
  //   const imagesWork = document.querySelector('.work-here');
  //   const imagesWorkOffset = imagesWork.getBoundingClientRect().top
  //   const imagesWorkHeight = window.innerHeight / 10
  //   if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
  //     document.querySelector('.work-here').classList.add('active')
  //     imagesWorkReached = true
  //   }
  // }
  var header = document.querySelector('.container .header');

  if (window.scrollY > 320) {
    header.classList.add('header--white');
  } else {
    header.classList.remove('header--white');
  }
});
var burger = document.querySelectorAll('.header__hamburger a');
burger.forEach(function (burgerItem, i) {
  burgerItem.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body.classList.add('main-nav-active');
  });
});
var burgerClose = document.querySelector('.main-nav-close span');

if (burgerClose) {
  burgerClose.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body.classList.remove('main-nav-active');
  });
} // const toViewRoles = () => {
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
  var arrows = true;
  var height = 'calc(100vh - 127px)';
  var type = 'fade';
  var rewind = true;
  var fixedWidth = '100%';
  var pagination = false;
  var arrowPath = "M40.07,40.76a4,4,0,0,0-1-2.28l-32-37a4,4,0,0,0-6.21,5l.17.21L30.79,41.1,1.07,75.48a4,4,0,0,0,5.86,5.45l.18-.2,32-37A4,4,0,0,0,40.07,40.76Z";
  var splide = new Splide(e, {
    type: type,
    arrows: arrows,
    perMove: perMove,
    rewind: rewind,
    focus: focus,
    height: height,
    fixedWidth: fixedWidth,
    trimSpace: trimSpace,
    pagination: pagination,
    arrowPath: arrowPath // breakpoints: {
    //     600: {
    //         perPage: 2,
    //         height : '6rem',
    //     }
    // }

  }).mount();
  var bannerText = document.querySelectorAll('.banner__fadeText h1');
  splide.on('move', function (e) {
    var bannerTextActive = document.querySelector('.banner__fadeText .active');
    bannerTextActive.classList.remove('active');
    bannerText[e].classList.add('active');
  });
});
//# sourceMappingURL=main.js.map
