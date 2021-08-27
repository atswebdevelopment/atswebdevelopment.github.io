const renderFaqs = (data) => {
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
      let categories = JSON.parse(e.category)
      if(categories && categories.length) {
        categories = `accordion__item--${categories[0]}`
      }
      html += `<div class="accordion__item ${categories}">
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

  content = document.querySelector('.pagination')
  if (content) {
    html = `<a href="#" class="pagination__item pagination__item--left">
      <svg xmlns="http://www.w3.org/2000/svg" width="6.65" height="13.467" viewBox="0 0 6.65 13.467">
          <g id="arrow_right_" data-name="arrow right " transform="translate(5.25 1.4)">
              <path id="arrow_right" data-name="arrow right" d="M4,0,0,5.333l4,5.333" transform="translate(-4)" fill="none" stroke="#545567" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
          </g>
      </svg>
    </a>`
    const pages = Math.ceil(accordionItems.length / 10);
    for(let i = 0; i < pages; i++) {
      html += `<a href="#" class="pagination__item pagination__item--number ${i === 0 ? 'pagination__item--active' : ''}">
          ${i + 1}
      </a>`
    }
    html += `<a href="#" class="pagination__item pagination__item--right">
      <svg xmlns="http://www.w3.org/2000/svg" width="6.65" height="13.467" viewBox="0 0 6.65 13.467">
          <g id="arrow_right_" data-name="arrow right " transform="translate(1.4 1.4)">
              <path id="arrow_right" data-name="arrow right" d="M-4,0,0,5.333l-4,5.333" transform="translate(4)" fill="none" stroke="#545567" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
          </g>
      </svg>
    </a>`
    content.innerHTML = html
  }

  setPageDefaults()
  setAccordion()
}