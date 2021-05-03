// chooses the input elements of all radiobuttons
const dateInputs = document.querySelectorAll(".radio-group__input");
// for every input in the array an action will be processed
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => filterAndAppendDate(dateInput.value);
});

function createTaskElement(task) {
  //Create label/input/span Elements for HTML
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  //fills elements with attributes
  input.type = "checkbox";
  input.className = "checkbox-item";
  input.checked = task.completed;
  // input.id = task.name;
  input.name = task.id;
  span.className = "tasks-group__task";
  span.innerText = task.name;
  //defines input and span as child of the parent label, returns parent.
  label.append(input, span);
  return label;
}
// get values of the key "taskList" from the browser-storage and convert/parse this value to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if the array is empty, return defaultValue
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}
//get array with task objects from local Storage
//create taskElements array consisting of html elements base on the ...
function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
/////////////////////////////////////////////////
/// NEW FUNC
function filterAndAppendDate(taskDate) {
  // console.log("Filter Datum", taskDate);
  const taskList = parseJSONFromLocalStorage("taskList", []);
  // console.log("Vom Storage", taskList);
  const tasksDate = taskList.filter((task) => task.date === taskDate);
  // console.log("nach Filterung", tasksDate);
  const taskElements = tasksDate.map(function (task) {
    return createTaskElement(task);
  });
  console.log("Als HTML", taskElements);
  const tasksGroupElement = document.querySelector(".checkboxSection");
  removeAllChildren(tasksGroupElement);
  tasksGroupElement.append(...taskElements);
  applyOnClickToCheckboxes();
}

function applyOnClickToCheckboxes() {
  const radioInputs = document.querySelectorAll(".checkbox-item");
  radioInputs.forEach((checkboxInput) => {
    checkboxInput.onclick = () =>
      filterAndApplyToLocalStorage(checkboxInput.name);
  });
}

//checks if items are completed or not (gets task from Storage)
function filterAndApplyToLocalStorage(name) {
  const list = parseJSONFromLocalStorage("taskList", []);
  list.forEach((task) => {
    // console.log(task);
    // console.log(inputElement.id);
    if (task.id === name) {
      task.completed = !task.completed;
    }
  });
  stringifyJSONToLocalStorage("taskList", list);
}
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
