const formElement = document.querySelector(".form");

formElement.onsubmit = function (event) {
  event.preventDefault();

  const textInputElement = document.querySelector(".form__input");
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  if (!textInputElement.value) {
    alert("Enter a Task now!");
    return;
  }

  if (!checkedDateInput) {
    alert("Enter a Date now!");
    return;
  }

  const task = {
    name: textInputElement.value,
    date: checkedDateInput.value,
  };

  const taskList = JSON.parse(localStorage.getItem("taskList"));

  taskList.push(task);
  console.log(taskList);

  localStorage.setItem("taskList", JSON.stringify(taskList));
};
