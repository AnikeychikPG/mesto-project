var profileEditButton = document.querySelector('.profile__edit-button')
var popup = document.querySelector('.popup')
var popupCloseButton = document.querySelector('.popup__close-button')
var formElement = document.querySelector('.popup__form')
var profileName = document.querySelector('.profile__name')
var profileJob = document.querySelector('.profile__job')
var popupNameElements = document.getElementsByName('popupName')
var popupJobElements = document.getElementsByName('popupJob')
var popupName = popupNameElements[0]
var popupJob = popupJobElements[0]

//автозаполнение popup формы
popupName.value = profileName.textContent
popupJob.value = profileJob.textContent

function formSubmitHandler(event) {
  event.preventDefault()
  profileName.textContent = popupName.value
  profileJob.textContent = popupJob.value
  popup.classList.remove('popup_active')
}

formElement.addEventListener('submit', formSubmitHandler)

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

