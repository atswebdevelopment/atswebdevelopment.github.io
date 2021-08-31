const renderTacp = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.tacp')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'content').Content)
    const cards = JSON.parse(array[0].cards)
    if (cards && cards.length > 0) {
        html = renderContentContainer(array, cards, html)
    }
    content.innerHTML = html
  }

  setPageDefaults()
}