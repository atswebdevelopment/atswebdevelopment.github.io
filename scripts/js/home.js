const renderHome = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.panel')
  if (content) {
    array = JSON.parse(data.Properties.find(m => m.Name === 'panelLinks').Content)
    array.forEach((e) => {
      if(e.link) {
        const link = JSON.parse(e.link)[0]
        html += `<a href="${link.url || link.udi}${link.queryString || ''}" class="panel__item">${e.icon && `<img src="${websiteUrl + e.icon}" />` || ''}<span>${link.name}</span></a>`
      }
    })
    content.innerHTML = html
  }

  content = document.querySelector('.latest-news__aside')
  html = ''
  if (content) {
    data.SelectedNews.forEach((e) => {
      const image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : ''
      html += `<div class="latest-news__card card" style="background-image:url(${image})">
        <a href="${e.Url}">
          <div class="card__inner">
            <div class="card__content">
              <div class="label">
                  <span class="label__timestamp">
                    ${e.Type} - ${e.PublishDate}
                  </span>
              </div>
              <p class="card__title title title--light">
                ${e.Name}
              </p>
            </div>
          </div>
        </a>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.scroll')
  html = ''
  if (content) {
    data.LatestNews.forEach((e) => {
      html += `<div class="most-read__card">
        <div class="label">
            <span class="label__name">
              ${e.Type}
            </span>
            <span class="label__timestamp">
              ${e.PublishDate}
            </span>
        </div>
        <p class="most-read__title title"><a href="${e.Url}">${e.Name}</a></p>
      </div>`
    })
    content.innerHTML = html
  }

  document.querySelector('.chatbot-button').addEventListener('click', (e) => {
    document.querySelector('body').classList.add('chat')
    e.preventDefault()
  })

  document.querySelector('.chatbot__close a').addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('chat')
    e.preventDefault()
  })

  document.querySelector('.chatbot__input button').addEventListener('click', (e) => {
    const text = document.querySelector('.chatbot__input input').value.replace('<','').replace('>','')
    if (text) {
      const window = document.querySelector('.chatbot__messages')
      window.innerHTML += `<div class="message message--user">
        <div class="message__text">
          ${text}
        </div>
      </div>`
      document.querySelector('.chatbot__input input').value = ''
      setTimeout(() => {
        httpGetMessage(websiteUrl + '/umbraco/api/contentapi/GetResults?text=' + text)
      }, 100)
    }
    e.preventDefault()
  })
  
  setSelects()
}

const loadMessages = (xdata) => {
  const data = JSON.parse(xdata)
  const window = document.querySelector('.chatbot__messages')
  if (data.ExceptionMessage) {
    window.innerHTML += `<div class="message">
      <img src="img/chatbot.svg" />
      <div class="message__text">Sorry, there was an error with your query. Please contact us.</div>
    </div>`
  } else {
    let string = "";
    data.forEach((e) => {
      string += `<div class="message">
        <img src="img/chatbot.svg" />
        <div class="message__text">
          ${e}
        </div>
      </div>`
    })
    window.innerHTML += string
    registerLinks(window)
  }
}

const httpGetMessage = (theUrl) => {
  console.log('Start get results')
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false)
  xmlHttp.onload = () => {
    console.log('Results loaded')
    loadMessages(xmlHttp.response)
  }
  xmlHttp.ontimeout = () => {
    console.log('Results error - timeout')
  }
  xmlHttp.onerror = () => {
    console.log('Results error - client')
  }
  xmlHttp.send( null )
}