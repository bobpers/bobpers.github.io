const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const USERNAME = "username";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(event) {
  const li = event.target.parentElement;
  li.classList.toggle("done");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const buttonDone = document.createElement("button");
  buttonDone.innerText = "✔︎";
  buttonDone.addEventListener("click", checkToDo);
  const buttonDel = document.createElement("button");
  buttonDel.innerText = "✕";
  buttonDel.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(buttonDone);
  li.appendChild(buttonDel);  
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const username = localStorage.getItem(USERNAME);

if(username === null) {
  toDoInput.disabled = true;
} else {
  toDoInput.disabled = false;
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
