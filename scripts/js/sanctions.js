const renderSanctions = (data) => {
  let content = ''
  let html = ''
  let array = []

  //Tabs
  const tabs = document.querySelectorAll('.tab')
  if (tabs.length) {
      tabs.forEach((tab, i) => {
          tab.addEventListener('click', (e) => {
              document.querySelector('.tab--active').classList.remove('tab--active')
              e.target.classList.add('tab--active')
              document.querySelector('.tab-content--active').classList.remove('tab-content--active')
              document.querySelectorAll('.tab-content')[i].classList.add('tab-content--active')
              e.preventDefault()
          })
      })
  }

  content = document.querySelector('.accordion__items--1')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'sanctionsList').Content)[0]
    const sanctionItems = JSON.parse(array.accordionList)
    
    const sanctionItemsLifeTime = sanctionItems.filter(m => !m.endDate)
    const sanctionItemsCurrent = sanctionItems.filter(m => Date.parse(m.endDate) >= Date.now())
    const newArray = sanctionItemsCurrent.concat(sanctionItemsLifeTime).sort((a, b) => {
      return Date.parse(a.endDate) - Date.parse(b.endDate)
    })
    newArray.forEach((item) => {
      html += `<div class="accordion__item ${item.program ? `accordion__item--${item.program}` : ''}">
          <div class="accordion__item-title xlarge">
              <a class="accordion__link" href=""></a>
              <div class="accordion__row">
                  <div class="accordion__column">
                      <span><b class="sort1">${item.title || ''}</b></span>
                  </div>
                  <div class="accordion__column">
                      <span><b>${item.program || ''}</b></span>
                  </div>
                  <div class="accordion__column">
                      <span><b class="sort2">${item.sanction || ''}</b></span>
                  </div>
              </div>
              <svg id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                  <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#00243f" />
              </svg>
          </div>
          <div class="accordion__item-content">
              <div class="accordion__column">
                  ${item.dateOfViolation ? `<p>
                  <b>Date of Violation</b><br />
                  ${getDate(new Date(item.dateOfViolation))}
                  </p>` : ''}
                  ${item.startDate ? `<p>
                  <b>Start date of Sanction</b><br />
                  ${getDate(new Date(item.startDate))}
                  </p>` : ''}
                  ${item.endDate ? `<p>
                  <b>End date of Sanction</b><br />
                  ${getDate(new Date(item.endDate))}
                  </p>` : ''}
                  ${item.ruleViolated ? `<p>
                  <b>Rule Violated</b><br />
                  ${item.ruleViolated}
                  </p>` : ''}
                  ${item.substance ? `<p>
                  <b>Substance</b><br />
                  ${item.substance}
                  </p>` : ''}
                  ${item.substanceClass ? `<p>
                  <b>Substance Class</b><br />
                  ${item.substanceClass}
                  </p>` : ''}
                  ${item.description ? `<p>
                  ${item.description}
                  </p>` : ''}
              </div>
              <div class="accordion__column">
                ${item.details ? `<p>
                    <span class="button">
                        <a href="${websiteUrl + item.details}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18" viewBox="0 0 16.5 18">
                                <path id="Shape" d="M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z" fill="#003a3c" />
                            </svg>
                            Download Decision
                        </a>
                    </span>
                </p>` : ''}`
      if (item.relatedArticles) {
        related = item.relatedArticles.split(',')
        html += '<p>Related Content</p>'
        related.forEach((e) => {
          html += `<div class="accordion__card">
              <a href="${e}">
                  <p>${e}</p>
              </a>
          </div>`
        })
      }
      html += '</div></div></div>'
    })
    content.innerHTML = html
  }

  content = document.querySelector('.accordion__items--2')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'sanctionsList').Content)[0]
    const sanctionItems = JSON.parse(array.accordionList)
    const sanctionItemsHistorical = sanctionItems.filter(m => Date.parse(m.endDate) < Date.now())
    sanctionItemsHistorical.forEach((item) => {
      html += `<div class="accordion__item ${item.program ? `accordion__item--${item.program}` : ''}">
          <div class="accordion__item-title xlarge">
              <a class="accordion__link" href=""></a>
              <div class="accordion__row">
                  <div class="accordion__column">
                      <span><b class="sort1">${item.title || ''}</b></span>
                  </div>
                  <div class="accordion__column">
                      <span><b>${item.program || ''}</b></span>
                  </div>
                  <div class="accordion__column">
                      <span><b class="sort2">${item.sanction || ''}</b></span>
                  </div>
              </div>
              <svg id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                  <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#00243f" />
              </svg>
          </div>
          <div class="accordion__item-content">
              <div class="accordion__column">
                  ${item.dateOfViolation ? `<p>
                  <b>Date of Violation</b><br />
                  ${getDate(new Date(item.dateOfViolation))}
                  </p>` : ''}
                  ${item.startDate ? `<p>
                  <b>Start date of Sanction</b><br />
                  ${getDate(new Date(item.startDate))}
                  </p>` : ''}
                  ${item.endDate ? `<p>
                  <b>End date of Sanction</b><br />
                  ${getDate(new Date(item.endDate))}
                  </p>` : ''}
                  ${item.ruleViolated ? `<p>
                  <b>Rule Violated</b><br />
                  ${item.ruleViolated}
                  </p>` : ''}
                  ${item.substance ? `<p>
                  <b>Substance</b><br />
                  ${item.substance}
                  </p>` : ''}
                  ${item.substanceClass ? `<p>
                  <b>Substance Class</b><br />
                  ${item.substanceClass}
                  </p>` : ''}
                  ${item.description ? `<p>
                  ${item.description}
                  </p>` : ''}
              </div>
              <div class="accordion__column">
                ${item.details ? `<p>
                    <span class="button">
                        <a href="${websiteUrl + item.details}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18" viewBox="0 0 16.5 18">
                                <path id="Shape" d="M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z" fill="#003a3c" />
                            </svg>
                            Download Decision
                        </a>
                    </span>
                </p>` : ''}`
      if (item.relatedArticles) {
        related = item.relatedArticles.split(',')
        html += '<p>Related Content</p>'
        related.forEach((e) => {
          html += `<div class="accordion__card">
              <a href="${e}">
                  <p>${e}</p>
              </a>
          </div>`
        })
      }
      html += '</div></div></div>'
    })
    content.innerHTML = html
  }

  //Tooltips
  const info = document.querySelectorAll('.info')
  info.forEach((e, i) => {
      e.addEventListener('mouseenter', () => {
          if (e.getBoundingClientRect().top - window.innerHeight > -215 && e.getBoundingClientRect().left - window.innerWidth > -400) {
              e.classList.add('br')
          }
          else if (e.getBoundingClientRect().top - window.innerHeight > -215) {
              e.classList.add('bl')
          }
          else if (e.getBoundingClientRect().left - window.innerWidth > -400) {
              e.classList.add('tr')
          }
          e.classList.add('show')
      })
      e.addEventListener('mouseleave', () => {
          e.classList.remove('show')
          e.classList.remove('bl','tr','br')
      })
  })

  setSelects()
  setAccordion()
  setPageDefaults()
}