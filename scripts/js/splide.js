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
    let pagination = false
    let arrowPath = "m 0,0 c -0.187,0 -0.364,0.073 -0.497,0.206 -0.268,0.287 -0.268,0.75 0.008,1.045 l 9.024,9.216 -8.712,8.92 c -0.271,0.289 -0.271,0.749 0.004,1.042 0.125,0.125 0.301,0.198 0.489,0.198 0.188,0 0.364,-0.073 0.497,-0.206 l 9.202,-9.396 c 0.288,-0.299 0.288,-0.77 0,-1.07 L 0.493,0.202 C 0.364,0.073 0.188,0 0,0"

    const splide = new Splide(e, {
        type,
        arrows,
        perMove,
        rewind,
        focus,
        height,
        fixedWidth,
        trimSpace,
        pagination,
        //arrowPath: arrowPath
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
