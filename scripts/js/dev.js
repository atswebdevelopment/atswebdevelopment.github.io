let imagesWhyReached = false
let whoAreWeReached = false
let quotesReached = false
let imagesWorkReached = false

document.addEventListener('scroll', () => {
  if (!imagesWhyReached) {
    const imagesWhy = document.querySelector('.images-why');
    const imagesWhyOffset = imagesWhy.getBoundingClientRect().top
    const imagesWhyHeight = window.innerWidth < 767 ? (window.innerHeight / 4) : imagesWhy.offsetHeight
    if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
      document.querySelector('.images-why').classList.add('active')
      imagesWhyReached = true
    }
  } else if (!whoAreWeReached) {
    const whoAreWe = document.querySelector('.who-are-we');
    const whoAreWeOffset = whoAreWe.getBoundingClientRect().top
    const whoAreWeHeight = window.innerWidth < 767 ? (window.innerHeight / 4) : whoAreWe.offsetHeight
    if (whoAreWeOffset - window.innerHeight + whoAreWeHeight < 0) {
      document.querySelector('.who-are-we').classList.add('active')
      whoAreWeReached = true
    }
  } else if (!quotesReached) {
    const quotes = document.querySelector('.quote');
    const quotesOffset = quotes.getBoundingClientRect().top
    const quotesHeight = window.innerWidth < 767 ? (window.innerHeight / 4) : quotes.offsetHeight
    if (quotesOffset - window.innerHeight + quotesHeight < 0) {
      document.querySelector('.quote').classList.add('active')
      quotesReached = true
    }
  } else if (!imagesWorkReached) {
    const imagesWork = document.querySelector('.work-here');
    const imagesWorkOffset = imagesWork.getBoundingClientRect().top
    const imagesWorkHeight = window.innerWidth < 767 ? (window.innerHeight / 4) : imagesWork.offsetHeight
    if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
      document.querySelector('.work-here').classList.add('active')
      imagesWorkReached = true
    }
  }

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const cardsOffset = card.getBoundingClientRect().top
    const cardsHeight = card.offsetHeight
    if (cardsOffset - window.innerHeight + cardsHeight < 0) {
      card.classList.add('active')
    }
  })
})

const play = document.querySelector('.play')
play.addEventListener('click', () => {
  play.classList.add('active')
  const video = document.querySelector('video')
  video.play()
  video.controls = true
})


const toViewRoles = () => {
  setTimeout(() => {
    const positions = document.querySelector('.positions');
    const positionsOffset = positions.getBoundingClientRect().top
    if (positionsOffset > 55) {
      window.scrollTo(0, window.scrollY + (positionsOffset / 50))
      toViewRoles()
    }
  }, 1)
}

const toViewRolesLink = document.querySelector('.header__cta a')
toViewRolesLink.addEventListener('click', () => {
  toViewRoles()
})

const accordionContent = document.querySelectorAll('.accordion__content')
accordionContent.forEach((accordion) => {
  accordion.height = accordion.offsetHeight + 'px'
  accordion.style.maxHeight = '0px'
})

const accordionHeader = document.querySelectorAll('.accordion__header')
accordionHeader.forEach((accordion, i) => {
  accordion.addEventListener('click', () => {
    accordionContent[i].style.maxHeight = accordionContent[i].style.maxHeight === '0px' ? accordionContent[i].height : '0px'
    accordion.parentElement.classList.toggle('active')
  })
})