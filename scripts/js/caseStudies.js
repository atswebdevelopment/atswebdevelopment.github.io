const renderCaseStudies = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.promos')
  if (content) {
    html = ''
    data.SubPages.forEach((e) => {
      const image = data.Properties.find(m => m.Name === 'image').Content
      const subtitle = data.Properties.find(m => m.Name === 'subtitle').Content
      html += `<div class="promo">
        <div class="video-link">
            <a href="${e.Url}">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 10.746 37.254 0 24 0ZM24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4ZM36 24.292L18 14V34L36 24.292Z" fill="white" />
                </svg>
            </a>
            ${image ? `<img src="${websiteUrl + image + '?anchor=center&mode=crop&width=767'}" alt="" />` : ''}
        </div>
        <div class="promo__content">
          <p class="promo__title title">
            <a href="${e.Url}">${e.Name}</a>
          </p>
          ${subtitle ? `<p>${subtitle}</p>` : ''}
          <p class="link">
            <a href="${e.Url}">
              View article
              <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                  <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
                      <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
                  </g>
                  <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
              </svg>
            </a>
          </p>
        </div>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.content-footer__inner p')
  if (content) {
    content.innerHTML = data.Properties.find(m => m.Name === 'comingSoon').Content
  }

  setPageDefaults()
}
