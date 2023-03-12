const carouselButtons = document.querySelectorAll('.button')
const images = document.querySelectorAll('.image')

carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    deactivateSelectedButton()
    
    selectCarouselButton(button)

    hideActiveImage()

    showBackgroundImage(index)
  })
})

function deactivateSelectedButton() {
  const selectedButton = document.querySelector('.selected')
  selectedButton.classList.remove('selected')
}

function selectCarouselButton (button) {
  button.classList.add('selected')
}

function hideActiveImage() {
  const activeImage = document.querySelector('.active')
  activeImage.classList.remove('active')
}

function showBackgroundImage(index) {
  images[index].classList.add('active')
}
