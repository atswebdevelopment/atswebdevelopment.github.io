const renderInvestigation = (data) => {
  let content = ''
  let html = ''
  let array = []
  const accordion = JSON.parse(data.Properties.find(m => m.Name === 'accordion').Content)[0]
  const accordionItems = JSON.parse(accordion.accordionList)

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
  }

  content = document.querySelector('.investigation-text')
  if (content) {
    const text = data.Properties.find(m => m.Name === 'hoverText').Content
    content.innerHTML = `<h2 class="content-footer__title title">Click / Tap on a section for more info</h2>
    <p>${text}</p>`
  }

  content = document.querySelector('.investigation')
  if (content) {  
    html = `<img class="investigation__image" src="${websiteUrl}/Images/InvestigationProcess.png?anchor=center&mode=crop&width=767" />`
    array = JSON.parse(data.Properties.find(m => m.Name === 'investigationProcess').Content)
    array.forEach((e) => {
      html += '<a href=""></a>'
    })
    content.innerHTML = html
  }

  content = document.querySelector('.investigation-content')
  if (content) {  
    html = ''
    const invP = JSON.parse(data.Properties.find(m => m.Name === 'investigationProcess').Content)
    invP.forEach((e) => {
      html += `<div class="investigation-content__item">
          <h2 class="content-footer__title title">${e.title}</h2>
          ${e.content}
      </div>`
    })
    content.innerHTML = html
  }
  
  setAccordion()
  setPageDefaults()
}