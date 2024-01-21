const menuListner = document.querySelector('.header__toggle-menu')
const menuComponent = document.querySelector('.menu__navbar')

menuListner.addEventListener('click', toggleMenu)

// alternar display block e display none do .menu__navbar
function toggleMenu() {
    const componentStyle = menuComponent.getAttribute('class').split(' ')

    if (componentStyle.includes('menu__hide')) menuComponent.setAttribute("class", "menu__navbar")
    else menuComponent.setAttribute("class", "menu__hide menu__navbar")
    // if (componentStyle == 'display: none;') menuComponent.setAttribute("style", 'display: block;')
    // else menuComponent.setAttribute("style", 'display: none;')
}

// document.addEventListener("DOMContentLoaded", console.log("voltar menu"))