var menuOpened = false
const toggleMenu = () => {
  if (menuOpened) {
    document.querySelector('.burger').setAttribute('src', 'images/menu.svg')
    document.querySelector('.burger-menu').style.opacity = '0'
    document.querySelector('.burger-menu').style.pointerEvents = 'none'
    } else {
    document.querySelector('.burger').setAttribute('src', 'images/cross.svg')
    document.querySelector('.burger-menu').style.opacity = '1'
    document.querySelector('.burger-menu').style.pointerEvents = 'all'
  }
  menuOpened = !menuOpened
}
document.querySelector('.burger').addEventListener('click', () => {
  toggleMenu()
})