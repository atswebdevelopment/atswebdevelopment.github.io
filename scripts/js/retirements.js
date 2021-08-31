const renderRetirements = (data) => {
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
    array = JSON.parse(data.Properties.find(m => m.Name === 'retirements').Content)
    
    const dateRetireds = array.filter(m => !m.dateReinstated)
    const newArray = dateRetireds.sort((a, b) => {
      return Date.parse(a.dateRetired) - Date.parse(b.dateRetired)
    })
    newArray.forEach((item) => {
      html += `<div class="accordion__item">
            <div class="accordion__item-title xlarge">
                <div class="accordion__row">
                    <div class="accordion__column">
                        <span><b class="sort1">${item.playerName}</b></span>
                    </div>
                    <div class="accordion__column">
                        <span><b class="sort2">${getDate(new Date(item.dateRetired))}</b></span>
                    </div>
                    <div class="accordion__column">
                        <span><b class="sort3">${item.nationality}</b></span>
                    </div>
                </div>
            </div>
        </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.accordion__items--2')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'retirements').Content)
    
    const dateReinstateds = array.filter(m => m.dateReinstated)
    const newArray = dateReinstateds.sort((a, b) => {
      return Date.parse(a.dateReinstated) - Date.parse(b.dateReinstated)
    })
    newArray.forEach((item) => {
      html += `<div class="accordion__item">
            <div class="accordion__item-title xlarge">
                <div class="accordion__row">
                    <div class="accordion__column">
                        <span><b class="sort1">${item.playerName}</b></span>
                    </div>
                    <div class="accordion__column">
                        <span><b class="sort2">${getDate(new Date(item.dateReinstated))}</b></span>
                    </div>
                    <div class="accordion__column">
                        <span><b class="sort3">${item.nationality}</b></span>
                    </div>
                </div>
            </div>
        </div>`
    })
    content.innerHTML = html
  }

  setSelects()
  setAccordion()
  setPageDefaults()
}