const renderArticle = (data) => {
  let content = ''
  let html = ''
  let array = []

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

  content = document.querySelector('.articletop')
  if (content) {
    html = ''
    if (data.Properties.find(m => m.Name === 'video').Content) {
      html += `<div class="article__header">
          <div class="banner__label label">
              <span class="label__name">
                ${data.ParentName}
              </span>
              <span class="label__timestamp">
                ${data.Properties.find(m => m.Name === 'publishedDate').Content}
              </span>
          </div>
          <h1 class="title">${data.Properties.find(m => m.Name === 'title').Content}</h1>
          <p class="subtitle banner__subtitle banner__subtitle--large">${data.Properties.find(m => m.Name === 'subtitle').Content}</p>
          <div class="article__video">
              <iframe src="https://www.youtube.com/embed/${data.Properties.find(m => m.Name === 'video').Content}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>`
    }
  }

  content = document.querySelector('.small i')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'publishedDate').Content
  }

  content = document.querySelector('.small .category')
  if (content) {
    content.innerHTML = data.ParentName
  }

  content = document.querySelector('.article__inner')
  if (content) {  
    html = ''
    const c = JSON.parse(data.Properties.find(m => m.Name === 'content').Content)
    if(c.sections && c.sections[0]) {
      c.sections.forEach((section) => {
        if(section.rows && section.rows[0]) {
          section.rows.forEach((row) => {
            if(row.areas && row.areas[0]) {
              row.areas.forEach((area) => {
                if(area.controls && area.controls[0]) {
                  area.controls.forEach((control) => {
                    html += control.value
                  })
                }
              })
            }
          })
        }
      })
    }
    content.innerHTML = html
  }
  
  setPageDefaults()
}