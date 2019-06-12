var
  link = document.querySelector(".login-link"),
  popup = document.querySelector(".modal-login"),
  close,
  form,
  login,
  password,
  mapLink = document.querySelector(".contacts-button-map"),
  mapPopup = document.querySelector(".modal-map"),
  mapClose;
  
  

var isStorageSupport = true;

var storage = "";

/* Проверяет доступность localStoradge */
try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

if (link) {
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
}

if (popup) {
  close = popup.querySelector(".modal-close");
  form = popup.querySelector("form");
  login = popup.querySelector("[name=login]");
  password = popup.querySelector("[name=password]");

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
}

if (mapLink) {
  /* Добавляет обработчик клика по кнопке Как проехать */
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

if (mapPopup) {
  mapClose = mapPopup.querySelector(".modal-close");

  /* Добавляет обработчик клика по кнопке Закрыть в окне с картой */
  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  /* Добавляет обработчик нажатия по клавише Esc при открытом окне с картой */
  window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

