const renderHistory = (data) => {
  let content = ''
  let array = []

  content = document.querySelector('.timeline')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'histories').Content)
    array.forEach((e) => {
      html += `<div class="timeline__item">
          <span class="timeline__ball"></span>
          <h3 class="timeline__title title">${e.title}</h3>
          <div class="timeline__content">
            ${e.content}
          </div>
      </div>`
    })
    content.innerHTML = html + '<div class="timeline__indicator"></div>'
  }

  content = document.querySelector('h2.title')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'secondaryTitle').Content
  }

  content = document.querySelector('.subtitle--narrow')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'secondarySubtitle').Content
  }


  setTimeline()
  setPageDefaults()
}