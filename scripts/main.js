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

  if (window.scrollY > 127) {
    header.classList.add('header--white');
  } else {
    header.classList.remove('header--white');
  }
});
var timer = setInterval(function () {
  var scContent = document.querySelector('.servicecard__content');

  if (scContent && window.innerWidth > 1024) {
    var bound = scContent.getBoundingClientRect().top - window.innerHeight;

    if (bound < 0) {
      scContent.style.top = "".concat(Math.abs(bound) / 5, "px");
    }
  }
}, 100);
window.addEventListener('scroll', function () {
  clearInterval(timer);
  var logoCircle = document.querySelector('.brandcards__icon--desktop');

  if (logoCircle) {
    logoCircle.style.transform = 'rotateZ(' + window.scrollY / 4 + 'deg)';
  }

  var cta = document.querySelector('.cta');

  if (cta && window.innerWidth > 1024) {
    var bound = cta.getBoundingClientRect().top - window.innerHeight;

    if (bound < 0) {
      cta.style.backgroundPosition = "0px -".concat(Math.abs(bound) / 5, "px");
    }
  } // const scContentBoxes = document.querySelectorAll('.servicecard__content')
  // if (window.innerWidth > 1024) {
  //   scContentBoxes.forEach((scContent, i) => {
  //     const bound = scContent.getBoundingClientRect().top - window.innerHeight
  //     if (bound < 0) {
  //       scContent.style.top = `${(Math.abs(bound) / 5)}px`
  //     }
  //   })
  // }

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
}

var play = document.querySelector('.video__button');

if (play) {
  play.addEventListener('click', function (e) {
    e.preventDefault();
    play.classList.add('hidden');
    var video = document.querySelector('.video__video');
    video.classList.add('video__video--play');
    video.play();
    video.controls = true;
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
  var arrowPath = "m 0,0 c -0.187,0 -0.364,0.073 -0.497,0.206 -0.268,0.287 -0.268,0.75 0.008,1.045 l 9.024,9.216 -8.712,8.92 c -0.271,0.289 -0.271,0.749 0.004,1.042 0.125,0.125 0.301,0.198 0.489,0.198 0.188,0 0.364,-0.073 0.497,-0.206 l 9.202,-9.396 c 0.288,-0.299 0.288,-0.77 0,-1.07 L 0.493,0.202 C 0.364,0.073 0.188,0 0,0";
  var splide = new Splide(e, {
    type: type,
    arrows: arrows,
    perMove: perMove,
    rewind: rewind,
    focus: focus,
    height: height,
    fixedWidth: fixedWidth,
    trimSpace: trimSpace,
    pagination: pagination //arrowPath: arrowPath
    // breakpoints: {
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
