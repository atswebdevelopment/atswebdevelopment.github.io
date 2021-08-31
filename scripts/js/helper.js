const setSelects = () => {
  const selects = document.querySelectorAll('.select')
  selects.forEach((selectContainer, i) => {
    const select = selectContainer.querySelector('select')
    if (selectContainer.classList.contains('select--language')) {
      select.value = lang
      if (select.options[select.selectedIndex]) {
        selectContainer.querySelector('.select__text').innerHTML = select.options[select.selectedIndex].text
      }
      selectContainer.querySelector('.select__icon').style.backgroundImage = `url(https://itiawebsite-itiastaging.azurewebsites.net/images/icon-${lang}.svg)`
    }
    select.addEventListener('change', (e) => {
      if (selectContainer.classList.contains('select--language')) {
        window.localStorage.setItem('lang', e.target.value)
        lang = e.target.value
        if (!url || url === '/') {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + e.target.value)
        } else {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetPage?lang=' + e.target.value + '&url=' + url)
        }
      }
      else {
        const selectText = selectContainer.querySelector('.select__text')
        selectText.innerHTML = e.target.value
      }
      if (selectContainer.classList.contains('select--inline')) {
        const items = document.querySelectorAll('.content-list__item')
        items.forEach((item, i) => {
          if (e.target.value === 'everywhere') {
            item.classList.remove('hidden')
          } else if (item.classList.contains('type-article') && e.target.value === 'articles') {
            item.classList.remove('hidden')
          } else if (!item.classList.contains('type-article') && e.target.value !== 'articles') {
            item.classList.remove('hidden')
          } else {
            item.classList.add('hidden')
          }
        })
      }
    })
  })
  
  const selectboxes = document.querySelectorAll('.select__link')
  document.onclick = (e) => {
      if (e.target.classList.value.indexOf('select__link')) {
          const selectboxesActive = document.querySelectorAll('.select__link.active')
          selectboxesActive.forEach((select, i) => {
              select.classList.remove('active')
          })
      }
  }
  
  selectboxes.forEach((select) => {
      select.addEventListener('click', (e) => {
          const selectboxesActive = document.querySelectorAll('.select__link.active')
          selectboxesActive.forEach((select, i) => {
              select.classList.remove('active')
          })
          select.classList.add('active')
          e.preventDefault()
      })
  })
  
  const accordionContainers = document.querySelectorAll('.accordion-container')
  
  accordionContainers.forEach((accordion) => {
      const selectboxLinks = accordion.querySelectorAll('.select__box a')
      selectboxLinks.forEach((selectLink) => {
          selectLink.addEventListener('click', (e) => {
            
            const select = selectLink.parentNode.parentNode.querySelector('select')
            const selectText = selectLink.parentNode.parentNode.querySelector('.select__text')
            const selectLinkActive = selectLink.parentNode.querySelector('.active')
            selectText.innerText = selectLink.innerText
            if (selectLinkActive) {
                selectLinkActive.classList.remove('active')
            }
            selectLink.classList.add('active')
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value == e.target.getAttribute('data-value')) {
                    select.options[i].selected = true
                    runAccordion(select, e.target.getAttribute('data-reverse'), accordion)
                    break
                }
            }
            e.preventDefault()
          })
      })
  })
}

const renderContentContainer = (array, cards, html) => {
  html += `<div class="column-container"><div class="column-container__inner"><div class="column-container__content"><h2 class="title column-container__title">${array[0].title}</h2>
  <p class="column-container__subtitle">${array[0].subtitle}</p><div class="columns">`
  cards.forEach((e, i) => {
    const link = JSON.parse(e.itemURL)[0]
    html += `<div class="column">
      ${e.image && `<img src="${websiteUrl + e.image}?anchor=center&mode=crop&width=767" />` || ''}
      <h3 class="title">${e.title}</h3>
      ${e.content || ''}
      ${link && link.udi && link.udi.indexOf('pdf') > -1 && `<span class="button button--alt">
          <a href="${link.udi}" target="_blank" download="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18" viewBox="0 0 16.5 18">
                  <path id="Shape" d="M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z" fill="#003a3c" />
              </svg>
              ${link.name}
          </a>
      </span>` || (link && `<p class="link">
          <a href="${link.url || link.udi}">
              ${link.name}
              <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                                                    <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                                                        <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773"></path>
                                                    </g>
                                                    <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3"></path>
                                                </svg>
          </a>
      </p>`) || ''}
  </div>`
  })
  return html + '</div></div></div></div>'
}

const renderContentAreas = (contentAreas) => {
  let html = ''
  if (!contentAreas) {
    return
  }
  contentAreas.forEach((item) => {
    if (item.contentArea)
    {
      html += `<div class="content-area">
          ${item.contentArea}
      </div>`
    }
    if (item.contentAreaGrey)
    {
      html += `<div class="article__inset">
          ${item.contentAreaGrey}
      </div>`
    }
    if (item.cards)
    {
      const cards = JSON.parse(item.cards)
      if (cards && cards.length > 0) {
        html += renderContentContainer([item], cards, html)
      }
    }
    if (item.files)
    {
        html += `${item.content}
        <div class="file-header">
            <span>File name</span>
        </div>`
        item.files.split(',').forEach((file) => {
          const fileArray = file.split('/')
          html += `<div class="file">
              <span>${fileArray[fileArray.length - 1]}</span>
              <a class="download-click" href="${websiteUrl + file}" target="_blank" download="">Download</a>
          </div>`
        })
    }
    if (item.caption)
    {
        html += `<div class="article__inset">
            <a class="expand-image" href="${websiteUrl + item.image}" target="_blank">
                <img src="${websiteUrl + item.image}" alt="" />
                <svg id="Ico_Btn_NewTab" data-name="Ico Btn NewTab" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41">
                    <g id="CTA_Primary" data-name="CTA/Primary">
                        <g id="Bg">
                            <rect id="Rectangle_Copy_4" data-name="Rectangle Copy 4" width="40" height="41" rx="20" fill="#cfef00" />
                        </g>
                    </g>
                    <g id="Ico_NewTab" data-name="Ico/NewTab" transform="translate(11 7.5)">
                        <path id="Path" d="M1.013,16.2H15.188A1.016,1.016,0,0,0,16.2,15.188v-8.1H14.175v7.088H2.025V2.025H9.113V0h-8.1A1.016,1.016,0,0,0,0,1.013V15.188A1.016,1.016,0,0,0,1.013,16.2Z" transform="translate(0 5.3)" fill="#235773" />
                        <path id="Line_2" data-name="Line 2" d="M.5.5v8" transform="translate(14.5)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" />
                        <path id="Line_2-2" data-name="Line 2" d="M8.5.5H.5" transform="translate(10.5 4)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" />
                    </g>
                </svg>
            </a>
            <p>${item.caption}</p>
        </div>`
    }
    if (item.stats)
    {
        html += `<div class="article__inset stat-container">
            <h3>${item.title}</h3>
            <div class="stats">`
        JSON.parse(item.stats).forEach((stat) => {
          html += `<div class="stat">
                  <div class="stat__title">${stat.title}</div>
                  <hr />
                  <div class="stat__number">${stat.number}</div>
                  <div class="stat__content">
                  ${stat.decrease ? `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
                      <path id="Triangle" d="M6,0l6-9H0Z" transform="translate(0 9)" fill="#fff" />
                  </svg>` : ''}
                  ${!stat.decrease ? `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
                      <path id="Triangle" d="M6,0l6,9H0Z" fill="#fff" />
                  </svg>` : ''}
                  ${stat.content}
                  </div>
              </div>`
        })
        html += `</div>
            ${item.content}
        </div>`
    }
    if (item.contentAreaBreakout)
    {
        const links = JSON.parse(item.links)
        html += `<div class="breakout ${item.imageReversed ? "breakout--reverse" : ""}">
              ${item.image ? `<div class="breakout__image"><img src="${websiteUrl + item.image}" alt="" /></div>` : ''}
              <div class="breakout__inner">
                  <h3>${item.title}</h3>
                  ${item.contentAreaBreakout}
                  ${links && links.length ?
                    `<p>
                        <span class="button">
                            <a href="${links[0].url || links[0].udi}${links[0].queryString || ''}">
                                ${links[0].name}
                            </a>
                        </span>
                        ${links[1] ?
                        `<span class="link">
                            <a href="${links[1].url || links[1].udi}${links[1].queryString || ''}">
                              ${links[1].name}
                            </a>
                        </span>` : ''}
                    </p>` : ''}
                </div>
            </div>
        </div>`
    }
    if (item.linksTitle)
    {
        const links = JSON.parse(item.links)
        html += `<div class="article__inset">
            <h3>${item.linksTitle}</h3>
            ${links && links.length ?
            `<p>
                <span class="button">
                    <a href="${links[0].url || links[0].udi}${links[0].queryString || ''}">
                        ${links[0].name}
                    </a>
                </span>
                ${links[1] ?
                `<span class="link">
                    <a href="${links[1].url || links[1].udi}${links[1].queryString || ''}">
                      ${links[1].name}
                    </a>
                </span>` : ''}
            </p>` : ''}
        </div>`
    }
    if (item.accordionList)
    {
        const accordion = JSON.parse(item.accordionList)
        html += `<div class="accordion">
                <div class="accordion__inner">
                    <div class="accordion__header">
                        <h3 class="accordion__title title">${item.title}</h3>
                    </div>
                    <div class="accordion__items">`
        accordion.forEach((accordionItem) => {
          html += `<div class="accordion__item">
            <div class="accordion__item-title">
                <a class="accordion__link" href=""></a>
                <span class="large">${accordionItem.title}</span>
                <svg id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#00243f" />
                </svg>
            </div>
            <div class="accordion__item-content">
                <div class="accordion__cell">
                  ${accordionItem.content}
                </div>
            </div>
        </div>`
        })
        html += `</div>
                </div>
            </div>
        </div>`
    }
  })
  return html
}

const getDate = (today) => {
  if (!today) {
    today = new Date()
  }
  const dd = String(today.getDate()).padStart(2, '0')
  const month = today.toLocaleString('default', { month: 'long' })
  const yyyy = today.getFullYear()
  return dd + ' ' + month + ' ' + yyyy
}