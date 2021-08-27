const renderPartners = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.column-container--1')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'content').Content)
    const cards = JSON.parse(array[0].cards)
    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html)
    }
    content.innerHTML = html
  }

  content = document.querySelector('.column-container--2')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'players').Content)
    const cards = JSON.parse(array[0].cards)
    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html)
    }
    content.innerHTML = html
  }

  content = document.querySelector('.column-container--3')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'officials').Content)
    const cards = JSON.parse(array[0].cards)
    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html)
    }
    content.innerHTML = html
  }

  setPageDefaults()
}