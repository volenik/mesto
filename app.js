// selectors

let editButton = document.querySelector(".profile__edit");
let closeButton = document.querySelector(".close-button");

//EventListeners

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);

//Functions

function popupOpen(event) {
  //open popup
  let popup = document.querySelector(".popup");
  popup.classList.add("popup__opened");
}

function popupClose(event) {
  //close popup
  let popup = document.querySelector(".popup");
  popup.classList.remove("popup__opened");
}

//save value input


function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = document.getElementById("nameInput").value;
  let jobInput = document.getElementById("jobInput").value;
  // Получите значение полей jobInput и nameInput из свойства value

  document.querySelector(".profile__title").textContent = nameInput;

  document.querySelector(".profile__subtitle").textContent = jobInput;
  // Выберите элементы, куда должны быть вставлены значения полей
  // name.textContent = nameInput;

  // Вставьте новые значения с помощью textContent

  popupClose();
}

let formElement = document.querySelector(".popup__button");
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("click", formSubmitHandler);
