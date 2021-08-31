const renderContentPage = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.content-intro')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'content').Content
  }

  content = document.querySelector('.content-areas')
  if (content) {
    const contentAreas = JSON.parse(data.Properties.find(m => m.Name === 'contentNested').Content)
    if (contentAreas) {
      content.innerHTML = renderContentAreas(contentAreas)
    }
  }
  
  setAccordion()
  setSelects()
  setPageDefaults()
}