const renderNewsCategory = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.promos')
  if (content) {
    html = ''
    array = [...data.LatestNews.slice(0, 6)]
    array.forEach((e) => {
      const image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''
      html += `<div class="promo">
        <div class="promo__card card" style="background-image:url(${image})"></div>
        <div class="promo__content">
          <div class="promo__timestamp timestamp">${e.PublishDate}</div>
          <p class="promo__title title">
            <a href="${e.Url}">${e.Name}</a>
          </p>
          ${e.Subtitle ? `<p>${e.Subtitle}</p>` : ''}
          <p class="link">
            <a href="${e.Url}">
              View article
              <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                  <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                      <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                  </g>
                  <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
              </svg>
            </a>
          </p>
        </div>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.small span')
  if (content) {
    content.innerHTML = data.Name
  }

  content = document.querySelector('.scroll')
  if (content) {
    html = ''
    data.MostRead.forEach((e) => {
      html += `
      <div class="most-read__card">
          <div class="label">
              <span class="label__name">
                  ${e.Type}
              </span>
              <span class="label__timestamp">
                  ${e.PublishDate}
              </span>
          </div>
          <p class="title"><a href="${e.Url}">${e.Name}</a></p>
      </div>
      `
    })
    content.innerHTML = html
  }

  content = document.querySelector('.content-list')
  if (content) {
    html = '<div class="content-list__inner">'
    array = [...data.LatestNews.slice(6)]
    array.forEach((e, i) => {
      const image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''
      html += `<div class="content-list__item ${i > 2 ? 'content-list__item--hidden' : ''}">
          ${image ? `<div class="content-list__image" style="background-image:url(${image})"></div>` : ''}
          <div class="content-list__content">
              <span class="content-list__timestamp timestamp">
                ${e.PublishDate}
              </span>
              <h3 class="content-list__title title"><a href="${e.Url}">${e.Name}</a></h3>
              ${e.Subtitle ? `<p>${e.Subtitle}</p>` : ''}
              <p class="link">
                  <a href="${e.Url}">
                      Read more
                      <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                          <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                              <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                          </g>
                          <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
                      </svg>
                  </a>
              </p>
          </div>
      </div>`
    })
    html += '</div>'
    if (data.LatestNews.length > 9) {
      html += `<p class="content-list__button button center">
          <a href="" class="load-more">
              Load more
              <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                  <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                      <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                  </g>
                  <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
              </svg>
          </a>
      </p>`
    }
    content.innerHTML = html
  }

  //Load more
  const loadMore = document.querySelector('.load-more')
  if (loadMore) {
      loadMore.addEventListener('click', (e) => {
          const contentItems = document.querySelectorAll('.content-list__item--hidden');
          contentItems.forEach((item, i) => {
              if (i < 10) {
                  item.classList.remove('content-list__item--hidden');
              }
          })
          e.preventDefault()
      })
  }

  // content = document.querySelector('.section--featured')
  // if (content) {
  //   html = ''
  //   const e = data.SubPages[0]
  //   content.innerHTML = `<div class="section__inner">
  //     <div class="featured">
  //         <div class="featured__card card">
  //             <img src="${e.Url}" alt="${e.Name}" />
  //         </div>
  //         <div class="featured__content">
  //             <div class="label label--alt">
  //                 <span class="label__name">
  //                     Featured
  //                 </span>
  //                 <span class="label__timestamp timestamp">
  //                     @featuredPublishedDate.ToString("dd MMMM yyyy")
  //                 </span>
  //             </div>
  //             <h2 class="featured__title title"><a href="@featured.Url()">@featured.Value("title")</a></h2>
  //             <p class="small">
  //                 @featured.Value("subtitle")
  //             </p>
  //             <p class="link">
  //                 <a href="@featured.Url()">
  //                     Read more
  //                     <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
  //                         <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
  //                             <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
  //                         </g>
  //                         <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
  //                     </svg>
  //                 </a>
  //             </p>
  //         </div>
  //     </div>
  //   </div>`
  // }

  setPageDefaults()
}