const splides = document.querySelectorAll('.splide')

splides.forEach((e, i) => {
    let perMove = 1
    let focus = 'center'
    let trimSpace = true
    let arrows = true
    let height = 'calc(100vh - 127px)'
    let type = 'fade'
	let rewind = true
    let fixedWidth = '100%'
    let autoplay = true
    let pagination = false
    let interval = 4000
    let arrowPath = "M40.07,40.76a4,4,0,0,0-1-2.28l-32-37a4,4,0,0,0-6.21,5l.17.21L30.79,41.1,1.07,75.48a4,4,0,0,0,5.86,5.45l.18-.2,32-37A4,4,0,0,0,40.07,40.76Z"

    const splide = new Splide(e, {
        type,
        arrows,
        perMove,
        rewind,
        focus,
        height,
        fixedWidth,
        autoplay,
        interval,
        trimSpace,
        pagination,
        arrowPath: arrowPath
        // breakpoints: {
        //     600: {
        //         perPage: 2,
        //         height : '6rem',
        //     }
        // }
    }).mount()

    const bannerText = document.querySelectorAll('.banner__fadeText h1')

    splide.on('move', (e) => {
        const bannerTextActive = document.querySelector('.banner__fadeText .active')
        bannerTextActive.classList.remove('active')
        bannerText[e].classList.add('active')
    })
})