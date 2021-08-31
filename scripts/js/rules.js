const renderRules = (data) => {
  let content = ''
  let html = ''
  let array = []
  const accordion = JSON.parse(data.Properties.find(m => m.Name === 'accordion').Content)[0]
  const accordionItems = JSON.parse(accordion.accordionList)

  content = document.querySelector('.panel')
  if (content) {
    array = JSON.parse(data.Properties.find(m => m.Name === 'panelLinks').Content)
    array.forEach((e) => {
      if(e.link) {
        const link = JSON.parse(e.link)[0]
        html += `<a href="${link.url || link.udi}${link.queryString || ''}" class="panel__item">${e.icon && `<img src="${websiteUrl + e.icon}" />` || ''}<span>${link.name}</span></a>`
      }
    })
    content.innerHTML = html
  }

  content = document.querySelector('.latest-news__aside')
  if (content) {
    html = ''
    data.SelectedNews.forEach((e) => {
      const image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''
      html += `<div class="latest-news__card card" style="background-image:url(${image})">
        <a href="${e.Url}">
          <div class="card__inner">
            <div class="card__content">
              <div class="label">
                  <span class="label__timestamp">
                    ${e.Type} - ${e.PublishDate}
                  </span>
              </div>
              <p class="card__title title title--light">
                ${e.Name}
              </p>
            </div>
          </div>
        </a>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.accordion__title')
  if (content) {
    content.innerHTML = accordion.title
  }

  content = document.querySelector('.accordion__items')
  if (content) {
    html = ''
    accordionItems.forEach((e) => {
      html += `<div class="accordion__item">
            <div class="accordion__item-title">
                <a class="accordion__link" href=""></a>
                <span class="large">${e.title}</span>
                <svg id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#00243f" />
                </svg>
            </div>
            <div class="accordion__item-content">
                <div class="accordion__cell">
                  ${e.content}
                </div>
            </div>
        </div>`
    })
    content.innerHTML = html
    content.querySelectorAll('img').forEach((e) => {
      if (e.getAttribute('data-udi')) {
        e.setAttribute('src', websiteUrl + e.getAttribute('data-udi') + '?anchor=center&mode=crop&width=767')
      }
    })
  }

  content = document.querySelector('.scroll')
  if (content) {
    html = ''
    data.LatestNews.forEach((e) => {
      html += `<div class="most-read__card">
        <div class="label">
            <span class="label__name">
              ${e.Type}
            </span>
            <span class="label__timestamp">
              ${e.PublishDate}
            </span>
        </div>
        <p class="most-read__title title"><a href="${e.Url}">${e.Name}</a></p>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.introduction__content')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'introduction').Content
  }

  content = document.querySelector('.share')
  if (content) {
    const pdf = data.Properties.find(m => m.Name === 'pDF').Content
    if (pdf) {
      content.innerHTML = `<span class="button button--alt">
          <a href="${websiteUrl + pdf}" target="_blank" download="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18" viewBox="0 0 16.5 18">
                  <path id="Shape" d="M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z" fill="#003a3c" />
              </svg>
              Download PDF
          </a>
      </span>`
    }
  }

  content = document.querySelector('.content-areas')
  if (content) {
    const contentAreas = JSON.parse(data.Properties.find(m => m.Name === 'contentNested').Content)
    if (contentAreas && contentAreas.length) {
      content.innerHTML = renderContentAreas(contentAreas)
    }
  }

  const related = document.querySelectorAll('.introduction__content h2, .section__inner h2, .accordion__title')
  const relatedContainer = document.querySelector('.onthispage')
  html = ''

  related.forEach((e) => {
      html += `<p><a href="">${e.innerText}</a></p>`
  })

  if (relatedContainer) {
      relatedContainer.innerHTML = html

      relatedContainer.querySelectorAll('a').forEach((e, i) => {
          e.addEventListener('click', (el) => {
              let scrolledPos = 0
              const totopAnimate = setInterval(() => {
                  const pos = related[i].getBoundingClientRect().top - 90
                  if (scrolledPos === pos) {
                      clearInterval(totopAnimate)
                  }
                  scrolledPos = pos
                  window.scrollTo(0, window.scrollY + (pos / 50))
              }, 1)
              el.preventDefault()
          })
      })
  }
  
  setAccordion()
  setSelects()
  setPageDefaults()
}