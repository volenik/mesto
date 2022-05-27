// selectors

const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popup = document.querySelector(".popup");
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const formElement = document.querySelector(".popup__form");
//Functions
//open popup

function popupOpen() {
  popup.classList.toggle("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popup.addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    popupOpen();
  }
});

//save value input

function formSubmitHandler(evt) {
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupOpen();
}

//EventListeners
formElement.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupOpen);
