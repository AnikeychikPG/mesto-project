let profileEditButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let popupCloseButton = document.querySelector('.popup__close-button')
console.log(profileEditButton)
console.log(popup)
console.log(popupCloseButton)

profileEditButton.addEventListener('click', function() {
  popup.classList.add('popup_active')
  console.log('button was clicked: open')
})

popupCloseButton.addEventListener('click', function() {
  popup.classList.remove('popup_active')
  console.log('button was clicked: close')
})

popup.addEventListener('click', function(event) {
  if (event.target.classList.contains('popup')) {
    popup.classList.remove('popup_active')
    console.log('popup click and close')
  }
})