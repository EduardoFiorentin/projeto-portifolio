const menuLinks = document.querySelectorAll('#navbar a[href^="#"]')
const scrollTopButton = document.querySelector('.header__scrollToTopBtn')


// Scroll do menu 
function getDistanceFromTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

function scrollToSection(event) {
    event.preventDefault()
    const element = event.target
    const distance = getDistanceFromTop(element)
    smoothScrollTo(distance)
}

function smoothScrollTo (endY) {
    const startY = window.scrollY || window.pageYOffset
    const positionVariation = 20
    var realTimePosition = startY

    const timer = setInterval(() => {
        realTimePosition += positionVariation
        window.scroll(0, realTimePosition)

        if (realTimePosition >= endY - 30) clearInterval(timer)
        // -30 : pra ficar uma margem entre o topo da tela e o inicio da section

    }, 1)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})


// scroll do botão que leva ao topo 
function scrollToTop(event) {
    event.preventDefault()
    const distanceToTop = window.pageYOffset
    const positionVariation = -50
    var realTimePosition = distanceToTop

    const timer = setInterval(() => {
        realTimePosition += positionVariation
        window.scroll(0, realTimePosition)

        if (realTimePosition <= 0) clearInterval(timer)

    }, 1)

}


scrollTopButton.addEventListener("click", scrollToTop)