var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// these are our todo list items
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// we defined this variable to set the text content of the lsit to an empty string
var listContent = todo-list.text-content = "";

// this loop moves through the array
for (var i=0; i<todos.length; i++){
    // this variable
    var listEl = todoList.createElement("li", [i]);


    listEl.textContent = todos[i];

    // this makes the new list element appear in our list area
    appendChild(listEl);

}
