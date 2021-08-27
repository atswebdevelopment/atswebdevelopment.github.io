const renderRules = (data) => {
  let content = ''
  let html = ''
  let array = []

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
  
  setPageDefaults()
  setSelects()
}