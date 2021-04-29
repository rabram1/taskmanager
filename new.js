const formElement = document.querySelector(".form");

function parseJSONFromLocalStorage(key) {
  const json = localStorage.getItem(key);
  const data = JSON.parse(json);
  return data;
}

function appendToArray(item, array) {
  return [...array, item];
}

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

formElement.onsubmit = function (event) {
  // Prevent the default form submit behaivor (sending data to a server an reloading page)
  event.preventDefault();

  const textInputElement = document.querySelector(".form__input");
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  if (!textInputElement.value) {
    alert("Text Input is empty!");
    return;
  }

  if (!checkedDateInput) {
    alert("Radio Button not checked!");
    return;
  }

  const task = {
    name: textInputElement.value,
    date: checkedDateInput.value,
  };

  const taskList = parseJSONFromLocalStorage("taskList");
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);
};
