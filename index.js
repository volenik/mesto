// selectors

const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".close-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popup = document.querySelector(".popup");

//EventListeners

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupOpen);

//Functions
//open popup

function popupOpen() {
  popup.classList.toggle("popup__opened");
}

popup.addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    popupOpen();
  }
});

//save value input

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = document.getElementById("nameInput").value;
  let jobInput = document.getElementById("jobInput").value;
  // Получите значение полей jobInput и nameInput из свойства value

  profileName.textContent = nameInput;
  profileJob.textContent = jobInput;

  popupOpen();
}

let formElement = document.querySelector(".popup__button");
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("click", formSubmitHandler);
