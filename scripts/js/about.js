const renderAbout = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.blocks')
  if (content) {
    array = JSON.parse(data.Properties.find(m => m.Name === 'content').Content)
    if (array && array.length > 0) {
      array.forEach((e, i) => {
        const link = JSON.parse(e.link)[0]
        const button = JSON.parse(e.button)[0]
        html += `<div class="block">
          ${e.image && `<div class="block__image" style="background-image:url(${websiteUrl + e.image})"></div>` || ''}
          <div class="block__content">
              <h2 class="block__title title title--30">${e.title}</h2>
              <hr class="divider">
              ${e.content}
              <p>
                ${button &&
                `<span class="button">
                    <a href="${button.url || button.udi}${button.queryString || ''}">
                        ${button.name}
                        <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                            <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                                <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a" />
                            </g>
                            <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b" />
                        </svg>
                    </a>
                </span>` || ''
                }
                ${link &&
                `<span class="link">
                    <a href="${link.url || link.udi}${link.queryString || ''}">
                        ${link.name}
                        <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                            <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                                <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                            </g>
                            <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
                        </svg>
                    </a>
                </span>` || ''
                }
              </p>
          </div>
      </div>`
      })
    }
    content.innerHTML = html
  }

  content = document.querySelector('.column-container__content')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'columnContent').Content)
    const cards = JSON.parse(array[0].cards)
    if (cards && cards.length > 0) {
        html = renderContentContainer(array, cards, html)
    }
    content.innerHTML = html
  }

  content = document.querySelector('.pullout-container')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'pullout').Content)
    if (array && array.length){
      const pullout = array[0]
      const background = pullout.background ? `style="background-image:url(${pullout.background})"` : ''
      const button = pullout.button ? JSON.parse(pullout.button)[0] : null
      html += `<div class="pullout" ${background}">
          <div class="pullout__inner ${pullout.logos ? 'pullout__inner--wide' : ''}">
              <div class="${pullout.logos ? 'columns' : ''}">
                  <div class="${pullout.logos ? 'column' : ''}">
                      <div class="pullout__title title title--bold">
                          ${pullout.title}
                      </div>
                      <hr />
                      ${pullout.content}
                      ${button ? `<p class="button center">
                          <a href="${button.url || button.udi}${button.queryString || ''}">
                              ${button.name}
                              <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                                  <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                                      <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a" />
                                  </g>
                                  <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b" />
                              </svg>
                          </a>
                      </p>` : ''}
                  </div>`
      if (pullout.logos) {
        const logos = pullout.logos.split(',')
        html += '<div class="column">'
        logos.forEach((logo) => {
          html += `<img class="partner-logo" src="${websiteUrl + logo}" />`
        })
        html += '</div>'
      }
      content.innerHTML = html + `</div>
          </div>
      </div>`
    }
  }

  setPageDefaults()
}