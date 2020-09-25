var imagesWhyReached = false
var quotesReached = false
var imagesWorkReached = false

document.addEventListener('scroll', function () {
  if (!imagesWhyReached) {
    var imagesWhy = document.querySelector('.images-why');
    var imagesWhyOffset = imagesWhy.getBoundingClientRect().top
    var imagesWhyHeight = imagesWhy.offsetHeight
    if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
      document.querySelector('.images-why').classList.add('active')
      imagesWhyReached = true
    }
  } else if (!quotesReached) {
    var quotes = document.querySelector('.quote');
    var quotesOffset = quotes.getBoundingClientRect().top
    var quotesHeight = quotes.offsetHeight
    if (quotesOffset - window.innerHeight + quotesHeight < 0) {
      document.querySelector('.quote').classList.add('active')
      quotesReached = true
    }
  } else if (!imagesWorkReached) {
    var imagesWork = document.querySelector('.images-work');
    var imagesWorkOffset = imagesWork.getBoundingClientRect().top
    var imagesWorkHeight = imagesWork.offsetHeight
    if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
      document.querySelector('.images-work').classList.add('active')
      imagesWorkReached = true
    }
  }
})