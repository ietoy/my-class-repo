var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


renderTodos();

// this creates list elements starting with an empty first element
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

var enter = event.key;

  if enter = (enter)





addEventListener("submit", addTodo() {

});


function addTodo () {
  if (todoInput.value !== "") {
    todos.push(todoInput.value);
  }
  else {
    alert("input cannot be blank")
  }
};



