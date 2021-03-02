const splides = document.querySelectorAll('.splide')

splides.forEach((e, i) => {
    let perMove = 1
    let focus = 'center'
    let trimSpace = true
    let arrows = false
    let height = 526
    let type = 'slide'
    let fixedWidth = 526
    let pagination = false
    let arrowPath = "m 0,0 c -0.187,0 -0.364,0.073 -0.497,0.206 -0.268,0.287 -0.268,0.75 0.008,1.045 l 9.024,9.216 -8.712,8.92 c -0.271,0.289 -0.271,0.749 0.004,1.042 0.125,0.125 0.301,0.198 0.489,0.198 0.188,0 0.364,-0.073 0.497,-0.206 l 9.202,-9.396 c 0.288,-0.299 0.288,-0.77 0,-1.07 L 0.493,0.202 C 0.364,0.073 0.188,0 0,0"

    if (e.classList.contains('splide--brandcards') && window.innerWidth < 985) {
        height = 380
        fixedWidth = 280
        pagination = true
        arrows = true
        arrowPath = "M21,6.53H.5a.5.5,0,0,1,0-1H21a.5.5,0,0,1,0,1,M14.15,11.83a.49.49,0,0,1,.16-.69L20.76,6,14.31.92a.49.49,0,0,1-.16-.69.5.5,0,0,1,.69-.15L22,5.61a.5.5,0,0,1,0,.84L14.84,12a.42.42,0,0,1-.26.08A.51.51,0,0,1,14.15,11.83Z"
    }
    else if (e.classList.contains('splide--quotes')) {
        fixedWidth = 0
        height = 0
        arrows = true
        type = 'loop'
    }
    else if (window.innerWidth < 985) {
        height = 0
        fixedWidth = 0
    }

    new Splide(e, {
        type,
        arrows,
        height,
        fixedWidth,
        perMove,
        focus,
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
})
