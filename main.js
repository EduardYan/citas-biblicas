function toggleMode() {
  const body = document.body;
  const footer = document.querySelector("footer")
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  footer.classList.toggle('light-mode')
  footer.classList.toggle('dark-mode')
}

const themeButton = document.getElementById('mode-toggle')
themeButton.addEventListener('click', () => {
  toggleMode()
})