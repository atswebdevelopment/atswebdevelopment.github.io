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

const timer = setInterval(() => {
  const scContent = document.querySelector('.servicecard__content')
  if (scContent && window.innerWidth > 1024) {
    const bound = scContent.getBoundingClientRect().top - window.innerHeight
    if (bound < 0) {
      scContent.style.top = `${(Math.abs(bound) / 5)}px`
    }
  }
},100)

window.addEventListener('scroll', () => {
  clearInterval(timer)
  const logoCircle = document.querySelector('.brandcards__icon--desktop')
  if (logoCircle) {
    logoCircle.style.transform = 'rotateZ(' + (window.scrollY / 4) + 'deg)'
  }

  const cta = document.querySelector('.cta')
  if (cta && window.innerWidth > 1024) {
    const bound = cta.getBoundingClientRect().top - window.innerHeight
    if (bound < 0) {
      cta.style.backgroundPosition = `0px -${(Math.abs(bound) / 5)}px`
    }
  }

  const scContentBoxes = document.querySelectorAll('.servicecard__content')
  if (window.innerWidth > 1024) {
    scContentBoxes.forEach((scContent, i) => {
      const bound = scContent.getBoundingClientRect().top - window.innerHeight
      if (bound < 0) {
        scContent.style.top = `${(Math.abs(bound) / 5)}px`
      }
    })
  }
})

const burger = document.querySelectorAll('.header__hamburger a')
burger.forEach((burgerItem, i) => {
  burgerItem.addEventListener('click', (e) => {
    e.preventDefault()
    const body = document.querySelector('body')
    body.classList.add('main-nav-active')
  })
})

const burgerClose = document.querySelector('.main-nav-close span')
if (burgerClose) {
  burgerClose.addEventListener('click', (e) => {
    e.preventDefault()
    const body = document.querySelector('body')
    body.classList.remove('main-nav-active')
  })
}

const play = document.querySelector('.video__button')
if (play) {
  play.addEventListener('click', (e) => {
    e.preventDefault()
    play.classList.add('hidden')
    const video = document.querySelector('.video__video')
    video.classList.add('video__video--play')
    video.play()
    video.controls = true
  })
}

// const toViewRoles = () => {
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