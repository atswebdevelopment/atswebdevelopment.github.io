const renderNews = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.news__list')
  if (content) {
    html = '<h2 class="title">Latest news</h2>'
    array = data.LatestNews.slice(1)
    array.forEach((e) => {
      html += `<div class="news__item">
          <h3 class="title"><a href="${e.Url}">${e.Name}</a></h3>
          <div class="label">
            <span class="label__name">${e.Type}</span>
            <span class="label__timestamp">${e.PublishDate}</span>
          </div>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.news__main')
  if (content) {
    const e = data.LatestNews[0]
    const image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''
    content.innerHTML = `<img src="${image}" />
      <div class="news__label label">
        <span class="label__name">${e.Type}</span>
        <span class="label__timestamp">${e.PublishDate}</span>
      </div>
      <h2 class="title"><a href="@firstArticle.Url()">${e.Name}</a></h2>
      ${e.Subtitle ? `<p>${e.Subtitle}</p>` : ''}
      <p class="link">
        <a href="${e.Url}">Read more</a>
      </p>`
  }

  content = document.querySelector('.cards__inner')
  if (content) {
    html = ''
    array = data.MostRead
    array.forEach((e) => {
      html += `<div class="card" style="background-image:url(${e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''})">
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

    content = document.querySelector('.categorylist')
    if (content) {
      html = ''
      array = data.SubPages
      array.forEach((e) => {
        html += `<div class="title-head">
            <h2 class="title">Latest in ${e.Name}</h2>
            <div class="title-head__right">
                <p class="link">
                    <a href="${e.Url}">View all</a>
                </p>
            </div>
        </div>
        <div class="promos">
          <div class="promos__inner">`
        e.LatestNews.forEach((a) => {
          html += `<div class="promo">
              <div class="promo__timestamp timestamp">${a.PublishDate}</div>
              <p class="promo__title title">
                  <a href="${a.Url}">${a.Name}</a>
              </p>
              ${a.Subtitle ? `<p>${a.Subtitle}</p>` : ''}
              <p class="link">
                  <a href="${a.Url}">
                      View article
                      <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                          <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                              <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                          </g>
                          <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
                      </svg>
                  </a>
              </p>
          </div>`
        })
        html += `</div>
        </div>`
      })
      content.innerHTML = html
    }
  }
  
  setPageDefaults()
}