var menuOpened = false
const toggleMenu = () => {
  if (menuOpened) {
    document.querySelector('.burger').setAttribute('src', 'images/menu.svg')
  } else {
    document.querySelector('.burger').setAttribute('src', 'images/cross.svg')
  }
  menuOpened = !menuOpened
}
document.querySelector('.burger').addEventListener('click', () => {
  toggleMenu()
})