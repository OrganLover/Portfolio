const themeToggler = document.querySelector('.theme-toggler')
let localStorageTheme = localStorage.getItem('theme')
const colorScheme = window.getComputedStyle(document.documentElement).getPropertyValue('content')
const allHtmls = document.querySelectorAll('html')
const gitHubIcons = document.querySelectorAll('.github-icon')
const gitHubIconUrl = '../assets/images/contacts/gitHub.svg'
const gitHubBlackIconUrl = '../assets/images/contacts/gitHub-black.svg'

themeToggler.addEventListener('click', toggleTheme)

onLoad()
setClassName()

function onLoad() {
  if (!localStorageTheme) {
    if (colorScheme === '"light"') {
      localStorage.setItem('theme', 'light')
      localStorageTheme = localStorage.getItem('theme')
      allHtmls.forEach(item => item.dataset.theme = localStorageTheme)

      gitHubIcons.forEach(item => item.src = gitHubBlackIconUrl)
    }
    else if (colorScheme === '"dark"') {
      localStorage.setItem('theme', 'dark')
      localStorageTheme = localStorage.getItem('theme')
      allHtmls.forEach(item => item.dataset.theme = localStorageTheme)

      gitHubIcons.forEach(item => item.src = gitHubIconUrl)
    }
    return
  }
  allHtmls.forEach(item => item.dataset.theme = localStorageTheme)
  if (localStorageTheme === 'light') {
    gitHubIcons.forEach(item => item.src = gitHubBlackIconUrl)
  }
  else if (localStorageTheme === 'dark') {
    gitHubIcons.forEach(item => item.src = gitHubIconUrl)
  }
}


function setClassName() {
  if (localStorageTheme === 'dark') {
    themeToggler.classList.add('theme-toggler--dark-mode')
  }
  else if (localStorageTheme === 'light') {
    themeToggler.classList.remove('theme-toggler--dark-mode')
  }
}

function toggleTheme() {
  if (localStorageTheme === 'light') {
    localStorage.setItem('theme', 'dark')
    localStorageTheme = localStorage.getItem('theme')
    themeToggler.classList.add('theme-toggler--dark-mode')
    allHtmls.forEach(item => item.dataset.theme = 'dark')
    gitHubIcons.forEach(item => item.src = gitHubIconUrl)
  }
  else if (localStorageTheme === 'dark') {
    localStorage.setItem('theme', 'light')
    localStorageTheme = localStorage.getItem('theme')
    themeToggler.classList.remove('theme-toggler--dark-mode')
    allHtmls.forEach(item => item.dataset.theme = 'light')
    gitHubIcons.forEach(item => item.src = gitHubBlackIconUrl)
  }
}