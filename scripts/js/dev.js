/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
const websiteUrl = 'https://itiawebsite-itiastaging.azurewebsites.net'
let url = ''
let lang = window.localStorage.getItem('lang') === null ? 'en' : window.localStorage.getItem('lang')

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  //document.getElementById('deviceready').classList.add('ready')
  console.log('Page loaded')

  const windowUrl = window.location.href.split('?url=')[1]
  const content = window.localStorage.getItem('content')
  // if (content) {
  //   const data = JSON.parse(content)
  //   if (windowUrl) {
  //     url = windowUrl
  //     httpGet('https://itiawebsite-itiastaging.azurewebsites.net/umbraco/api/contentapi/GetPage?url=' + windowUrl)
  //   } else {
  //     loadPage(content)
  //   }
  // } else {
  //   httpGet('https://itiawebsite-itiastaging.azurewebsites.net/umbraco/api/contentapi/GetHome')
  // }
  if (content) {
    const data = JSON.parse(content)
    if (data.Type === "homepage") {
      loadPage(content)
    } else {
      httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang)
    }
  }
  else {
    httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang)
  }
}

const httpGetPage = (theUrl) => {
  console.log('Start get page')
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false)
  xmlHttp.onload = () => {
    document.querySelector('.content-container').innerHTML = xmlHttp.responseText
    document.querySelector('.loading').classList.add('hidden')
    renderData()
  }
  xmlHttp.send( null )
}

const httpGet = (theUrl) => {
  console.log('Start get data')
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', theUrl, false)
  xmlHttp.onload = () => {
    console.log('Data loaded')
    loadPage(xmlHttp.response)
  }
  xmlHttp.ontimeout = () => {
    console.log('Data error - timeout')
  }
  xmlHttp.onerror = () => {
    console.log('Data error - client')
  }
  xmlHttp.send( null )
}

const loadPage = (xdata) => {
  const data = JSON.parse(xdata)
  data.Url = url
  if (data.ExceptionMessage) {
    console.log('Data error - server')
  }
  window.localStorage.setItem('content', JSON.stringify(data))
  httpGetPage(`${data.Type}.html`)
}

const renderData = () => {
  console.log('Data parsed!')
  const content = window.localStorage.getItem('content')
  const data = JSON.parse(content)
  console.log(data)
  window.scrollTo(0, 0)
  
  const chatOpen = document.querySelector('.chat')
  if(chatOpen) {
    chatOpen.classList.remove('chat')
  }

  if (data.Type === "homepage") {
    renderLayout(data)
    renderHome(data)
  }
  renderContent(data)

  if (data.Type === "about" || data.Type === "tadp") {
    renderAbout(data)
  }
  if (data.Type === "tACP" || data.Type === "tACP1") {
    renderTacp(data)
  }
  if (data.Type === "learn") {
    renderLearn(data)
  }
  if (data.Type === "partners") {
    renderPartners(data)
  }
  if (data.Type === "caseStudies") {
    renderCaseStudies(data)
  }
  if (data.Type === "sanctions") {
    renderSanctions(data)
  }
  if (data.Type === "retirements") {
    renderRetirements(data)
  }
  if (data.Type === "contact") {
    renderContact(data)
  }
  if (data.Type === "contentPage") {
    renderContentPage(data)
  }
  if (data.Type === "rules") {
    renderRules(data)
  }
  if (data.Type === "history") {
    renderHistory(data)
  }
  if (data.Type === "news") {
    renderNews(data)
  }
  if (data.Type === "investigation") {
    renderInvestigation(data)
  }
  if (data.Type === "newsCategory") {
    renderNewsCategory(data)
  }
  if (data.Type === "article") {
    renderArticle(data)
  }
  if (data.Type === "fAQs") {
    renderFaqs(data)
  }
}

const renderLayout = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.menu')
  data.Menu.forEach((e) => {
    if (e.SubPages.length) {
      let subPageHtml = ''
      e.SubPages.forEach((page) => {
        subPageHtml += `<li class="submenu__item">
          <a href="${page.Url}">${page.Name}</a>
        </li>`
      })
      const subHtml = `<ul class="submenu">
          <li class="submenu__item">
              <a href="${e.Url}">${e.Name} home</a>
          </li>
          ${subPageHtml}
      </ul>`
      html += `<li class="menu__item"><div></div><span>
          ${e.Name}
          <svg class="menu__icon" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
              <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773" />
          </svg>
      </span>${subHtml}</li>`
    } else {
      html += `<li class="menu__item"><div></div><a href="${e.Url}">${e.Name}</a></li>`
    }
  })
  content.innerHTML = html
  document.querySelectorAll('.menu__item > div').forEach((link) => {
    link.addEventListener('click', () => {
      if (document.querySelector('.menu-open')) {
        document.querySelector('.menu-open').classList.remove('menu-open')
      }
      link.parentNode.classList.add('menu-open')
    })
  })
  registerLinks(content)

  content = document.querySelector('.partners__inner')
  html = '<h2 class="title partners__title small">On behalf of our partners</h2>'
  array = data.Properties.find(m => m.Name === 'partners').Content.split(',')
  array.forEach((e) => {
    html += `<img class="partners__logo" src="${websiteUrl + e}" />`
  })
  content.innerHTML = html
}

const renderContent = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.banner__background')
  if (content) {
    const image = data.Properties.find(m => m.Name === 'image').Content
    if (image) {
      content.style.backgroundImage = `url('${websiteUrl + image}?anchor=center&mode=crop&width=767')`
    }
  }

  content = document.querySelector('.banner__content .title')
  if (content) {
    html = data.Properties.find(m => m.Name === 'title').Content
    content.innerHTML = html
  }

  content = document.querySelector('.banner__subtitle')
  if (content) {
    let subtitle = data.Properties.find(m => m.Name === 'subtitle').Content
    if (subtitle){
      html = subtitle.replace("{{date}}", getDate())
      content.innerHTML = html
    }
  }

  setPageDefaults()
}

const registerLinks = (container) => {
  container.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const getUrl = link.getAttribute('href')
      if (getUrl === '#' || !getUrl) {
        // null
      } else if (getUrl.indexOf('http') > -1) {
        cordova.InAppBrowser.open(getUrl, '_system', 'location=yes')
      } else if (getUrl.indexOf('/media/') > -1) {
        cordova.InAppBrowser.open(getUrl, '_system', 'location=yes')
      } else {
        url = getUrl
        console.log('Launching request...')
        document.querySelector('.loading').classList.remove('hidden')
        if (!url || url === '/') {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang)
        } else {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetPage?lang=' + lang + '&url=' + url)
        }
        setTimeout(() => {
          document.querySelector('.loading').classList.add('hidden')
        }, 10000)
      }
      if (container && container.classList && container.classList.contains('menu')){
        const menuOpen = document.querySelector('.menu--active')
        if(menuOpen) {
          menuOpen.classList.remove('menu--active')
          document.querySelector('.header__burger').classList.remove('header__burger--active')
        }
      }
    })
  })
}

const setPageDefaults = () => {
  const content = document.querySelector('.content-container')
  registerLinks(content)

  const datepickers = document.querySelectorAll('.datepicker')
  datepickers.forEach((datepicker, i) => {
    new Pikaday({ field: datepicker })
  })
}

registerLinks(document)