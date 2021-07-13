"use strict";

document.addEventListener('scroll', function () {
  var header = document.querySelector('.container .header');

  if (window.innerWidth > 985) {
    if (window.scrollY > 320) {
      header.classList.add('header--white');
    } else {
      header.classList.remove('header--white');
    }
  }

  document.querySelectorAll('.fadeIn').forEach(function (e, i) {
    var offsetter = window.innerWidth < 767 ? 4 : 2;

    if (window.innerHeight > e.getBoundingClientRect().top + e.offsetHeight / offsetter) {
      e.classList.remove('fadeIn');
    }
  });
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

var toLink = function toLink(e) {
  setTimeout(function () {
    var positions = document.querySelector('.' + e);
    var positionsOffset = positions.getBoundingClientRect().top - 150;

    if (positionsOffset / 50 > 1 || positionsOffset / 50 < -1) {
      window.scrollTo(0, window.scrollY + positionsOffset / 50);
      toLink(e);
    }
  }, 1);
};

var headerLinks = document.querySelectorAll('.header__link a');
headerLinks.forEach(function (headerLink, i) {
  headerLink.addEventListener('click', function (e) {
    e.preventDefault();
    toLink(e.target.getAttribute('data-val'));
    var body = document.querySelector('body');
    body.classList.remove('main-nav-active');
  });
});

if (window.innerWidth > 1312) {
  var active = 0;
  var brandcards = document.querySelectorAll('.brandcard__link');
  brandcards.forEach(function (brandcard, i) {
    brandcard.addEventListener('click', function (e) {
      e.preventDefault();
      var brandcardActive = document.querySelector('.brandcards--active--' + active);
      console.log(active);

      if (brandcardActive) {
        brandcardActive.classList.remove('brandcards--active--' + active);
      }

      brandcard.parentNode.parentNode.parentNode.classList.add('brandcards--active--' + i);
      active = i;
    });
  });
}

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
