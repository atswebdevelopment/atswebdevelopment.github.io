"use strict";

var imagesWhyReached = false;
var whoAreWeReached = false;
var quotesReached = false;
var imagesWorkReached = false;
document.addEventListener('scroll', function () {
  if (!imagesWhyReached) {
    var imagesWhy = document.querySelector('.images-why');
    var imagesWhyOffset = imagesWhy.getBoundingClientRect().top;
    var imagesWhyHeight = window.innerWidth < 767 ? window.innerHeight / 2 : imagesWhy.offsetHeight;

    if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
      document.querySelector('.images-why').classList.add('active');
      imagesWhyReached = true;
    }
  } else if (!whoAreWeReached) {
    var whoAreWe = document.querySelector('.who-are-we');
    var whoAreWeOffset = whoAreWe.getBoundingClientRect().top;
    var whoAreWeHeight = window.innerWidth < 767 ? window.innerHeight / 2 : whoAreWe.offsetHeight;

    if (whoAreWeOffset - window.innerHeight + whoAreWeHeight < 0) {
      document.querySelector('.who-are-we').classList.add('active');
      whoAreWeReached = true;
    }
  } else if (!quotesReached) {
    var quotes = document.querySelector('.quote');
    var quotesOffset = quotes.getBoundingClientRect().top;
    var quotesHeight = window.innerWidth < 767 ? window.innerHeight / 2 : quotes.offsetHeight;

    if (quotesOffset - window.innerHeight + quotesHeight < 0) {
      document.querySelector('.quote').classList.add('active');
      quotesReached = true;
    }
  } else if (!imagesWorkReached) {
    var imagesWork = document.querySelector('.work-here');
    var imagesWorkOffset = imagesWork.getBoundingClientRect().top;
    var imagesWorkHeight = window.innerWidth < 767 ? window.innerHeight / 2 : imagesWork.offsetHeight;

    if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
      document.querySelector('.work-here').classList.add('active');
      imagesWorkReached = true;
    }
  }

  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    var cardsOffset = card.getBoundingClientRect().top;
    var cardsHeight = card.offsetHeight;

    if (cardsOffset - window.innerHeight + cardsHeight < 0) {
      card.classList.add('active');
    }
  });
});
var play = document.querySelector('.play');
play.addEventListener('click', function () {
  play.classList.add('active');
  var video = document.querySelector('video');
  video.play();
  video.controls = true;
});

var toViewRoles = function toViewRoles() {
  setTimeout(function () {
    var positions = document.querySelector('.positions');
    var positionsOffset = positions.getBoundingClientRect().top;

    if (positionsOffset > 55) {
      window.scrollTo(0, window.scrollY + positionsOffset / 50);
      toViewRoles();
    }
  }, 1);
};

var toViewRolesLink = document.querySelector('.header__cta a');
toViewRolesLink.addEventListener('click', function () {
  toViewRoles();
});
var accordionContent = document.querySelectorAll('.accordion__content');
accordionContent.forEach(function (accordion) {
  accordion.height = accordion.offsetHeight + 'px';
  accordion.style.maxHeight = '0px';
});
var accordionHeader = document.querySelectorAll('.accordion__header');
accordionHeader.forEach(function (accordion, i) {
  accordion.addEventListener('click', function () {
    accordionContent[i].style.maxHeight = accordionContent[i].style.maxHeight === '0px' ? accordionContent[i].height : '0px';
    accordion.parentElement.classList.toggle('active');
  });
});
//# sourceMappingURL=main.js.map
