
document.addEventListener('scroll', () => {
  const header = document.querySelector('.container .header')
  if (window.innerWidth > 985) {
    if(window.scrollY > 320) {
      header.classList.add('header--white')
    }
    else {
      header.classList.remove('header--white')
    }
  }

  document.querySelectorAll('.fadeIn').forEach((e, i) => {
    const offsetter = window.innerWidth < 767 ? 4 : 2
    if (window.innerHeight > e.getBoundingClientRect().top + (e.offsetHeight / offsetter)) {
      e.classList.remove('fadeIn')
    }
  })
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

const toLink = (e) => {
  setTimeout(() => {
    const positions = document.querySelector('.' + e);
    let positionsOffset = positions.getBoundingClientRect().top - 150
    if ((positionsOffset / 50) > 1 || (positionsOffset / 50) < -1) {
      window.scrollTo(0, window.scrollY + (positionsOffset / 50))
      toLink(e)
    }
  }, 1)
}

const headerLinks = document.querySelectorAll('.header__link a')
headerLinks.forEach((headerLink, i) => {
  headerLink.addEventListener('click', (e) => {
    e.preventDefault()
    toLink(e.target.getAttribute('data-val'))
    const body = document.querySelector('body')
    body.classList.remove('main-nav-active')
  })
})

const brandcards = document.querySelectorAll('.brandcard__link')
if (window.innerWidth > 1312) {
  let active = 0
  brandcards.forEach((brandcard, i) => {
    brandcard.addEventListener('click', (e) => {
      e.preventDefault()
      const brandcardActive = document.querySelector('.brandcards--active--' + active)
      if (brandcardActive) {
        brandcardActive.classList.remove('brandcards--active--' + active)
      }
      brandcard.parentNode.parentNode.parentNode.classList.add('brandcards--active--' + i)
      active = i
    })
  })
} else {
  brandcards.forEach((brandcard, i) => {
    brandcard.addEventListener('click', (e) => {
      e.preventDefault()
      brandcard.parentNode.parentNode.classList.add('brandcard--active')
    })
  })
}