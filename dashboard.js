function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "tasks-group__input";

  span.className = "tasks-group__task";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

/// auslesen des Arrays LocalStorage
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

const taskList = parseJSONFromLocalStorage("taskList", []);

const taskElements = taskList.map(function (task) {
  return createTaskElement(task.name);
});

const tasksGroupElement = document.querySelector(".checkbox-item");

tasksGroupElement.append(...taskElements);
