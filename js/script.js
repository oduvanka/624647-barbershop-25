var
  link = document.querySelector(".login-link"),
  popup = document.querySelector(".modal-login"),
  close = popup.querySelector(".modal-close"),
  form = popup.querySelector("form");
  login = popup.querySelector("[name=login]"),
  password = popup.querySelector("[name=password]"),

var isStorageSupport = true;

var storage = "";

/* Проверяет доступность localStoradge */
try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

/* Добавляет событие клика по кнопке Войти */
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

/* Добавляет обработчик клика по кнопке Закрыть в окне авторизации */
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

/* Добавляет обработчик нажатия по клавише Esc при открытом окне авторизации */
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

/* Отслеживает отправку формы авторизации */
form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
