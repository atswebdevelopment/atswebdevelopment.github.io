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
  if (data.Type === "homepage") {
    renderLayout(data)
    renderHome(data)
  }
  renderContent(data)

  if (data.Type === "about" || data.Type === "tadp") {
    renderAbout(data)
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
  if (data.Type === "contact") {
    renderContact(data)
  }
  if (data.Type === "rules") {
    renderRules(data)
  }
  if (data.Type === "news") {
    renderNews(data)
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
      html += `<li class="menu__item"><span>
          ${e.Name}
          <svg class="menu__icon" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
              <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773" />
          </svg>
      </span>${subHtml}</li>`
    } else {
      html += `<li class="menu__item"><a href="${e.Url}">${e.Name}</a></li>`
    }
  })
  content.innerHTML = html
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
      url = link.getAttribute('href')
      if (url === '#') {
        e.preventDefault()
      } else if (url.indexOf('http') > -1 || !url) {
        // open url in new window
      } else if (url.indexOf('/media/') > -1) {
        // media
      } else {
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
        e.preventDefault()
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

const setSelects = () => {
  const selects = document.querySelectorAll('.select')
  selects.forEach((selectContainer, i) => {
    const select = selectContainer.querySelector('select')
    if (selectContainer.classList.contains('select--language')) {
      select.value = lang
      if (select.options[select.selectedIndex]) {
        selectContainer.querySelector('.select__text').innerHTML = select.options[select.selectedIndex].text
      }
      selectContainer.querySelector('.select__icon').style.backgroundImage = `url(https://itiawebsite-itiastaging.azurewebsites.net/images/icon-${lang}.svg)`
    }
    select.addEventListener('change', (e) => {
      if (selectContainer.classList.contains('select--language')) {
        window.localStorage.setItem('lang', e.target.value)
        lang = e.target.value
        if (!url || url === '/') {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + e.target.value)
        } else {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetPage?lang=' + e.target.value + '&url=' + url)
        }
      }
      else {
        const selectText = selectContainer.querySelector('.select__text')
        selectText.innerHTML = e.target.value
      }
      if (selectContainer.classList.contains('select--inline')) {
        const items = document.querySelectorAll('.content-list__item')
        items.forEach((item, i) => {
          if (e.target.value === 'everywhere') {
            item.classList.remove('hidden')
          } else if (item.classList.contains('type-article') && e.target.value === 'articles') {
            item.classList.remove('hidden')
          } else if (!item.classList.contains('type-article') && e.target.value !== 'articles') {
            item.classList.remove('hidden')
          } else {
            item.classList.add('hidden')
          }
        })
      }
    })
  })
}

const renderContentContainer = (array, cards, html) => {
  html += `<h2 class="title column-container__title">${array[0].title}</h2>
  <p class="column-container__subtitle">${array[0].subtitle}</p><div class="columns">`
  cards.forEach((e, i) => {
    const link = JSON.parse(e.itemURL)[0]
    html += `<div class="column">
      ${e.image && `<img src="${websiteUrl + e.image}?anchor=center&mode=crop&width=767" />` || ''}
      <h3 class="title">${e.title}</h3>
      ${e.content}
      ${link && link.udi && link.udi.indexOf('pdf') > -1 && `<span class="button button--alt">
          <a href="${link.udi}" download="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="18" viewBox="0 0 16.5 18">
                  <path id="Shape" d="M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z" fill="#003a3c" />
              </svg>
              ${link[0].name}
              <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                  <g id="Icon_CtaChevron_Passive" data-name="Icon/CtaChevron/Passive" transform="translate(1)">
                      <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                          <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a" />
                      </g>
                      <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b" />
                  </g>
              </svg>
          </a>
      </span>` || (link && `<p class="link">
          <a href="${link.url || link.udi}">
              ${link.name}
              <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                  <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                      <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                  </g>
                  <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
              </svg>
          </a>
      </p>`) || ''}
  </div>`
  })
  return html + '</div>'
}

registerLinks(document)

const getDate = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const month = today.toLocaleString('default', { month: 'long' })
  const yyyy = today.getFullYear()
  return dd + ' ' + month + ' ' + yyyy
}
//document.querySelector('.year').innerHTML = new Date().getFullYear()