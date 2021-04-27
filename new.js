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

  console.log(textInputElement.value, checkedDateInput.value);
};
