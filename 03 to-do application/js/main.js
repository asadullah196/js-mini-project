// Log test
let myName = "Asadullah";
//console.log("myName");

//let myId = document.getElementById("todo-submit").innerHTML;

const todoList = document.getElementById("sample-output-list");

// Todo function
function creatTodo(todoID, todoInput) {

  //const toDoElements = document.createElement("li");
  // const todoElement = document.createElement("li");
  const todoElement = document.getElementById("sample-output-list");

  const todoIDValue = todoID;
  const todoInputValue = todoInput;
  //console.log("X value = " + todoIDValue);
  //console.log("y value = " + todoInputValue);

  //Push todo into local storage
  const myTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  myTodos.push({ todoIDValue, todoInputValue });
  localStorage.setItem("todos", JSON.stringify(myTodos));

  myTodos.value = "";

  //console.log("Test = " + todoIDValue);

  // Display todos in front end
  var toDoElements = document.createElement("li");

  toDoElements.innerHTML = `
  <input type="text" value="${todoInputValue.todoIDValue}" class="task"></input>
  `;

  todoElement.insertBefore(toDoElements, todoElement.children[0]);
  // clear input
  todoInputValue.todoIDValue = "";

  //console.log(myTodos);

  //tasks = todos
  // task = todo-input, or todo-submit, todoInputValue
  // li = toDoElements
  // task.value = todoInputValue.todoIDValue
  // list = todoElement

  // Check if there is any value in local storage or not


  //console.log(myTodos.length);
  // let tasks = Array.from(myTodos);
  // console.log(tasks);


  // Testing code
  /*
  myTodos.forEach(todoLoop);
  function todoLoop(value) {
    console.log(value.todoInputValue);
  }
 */
  //console.log(myTodos.todoInputValue);

  /*
  // Display todos in front end
  var toDoElements = document.createElement("li");

  toDoElements.innerHTML = `
    <span> ${todoInputValue} </span>&nbsp;&nbsp;
    <i class="fa fa-times" aria-hidden="true"></i>&nbsp;
    <i class="fa fa-check" aria-hidden="true"></i>
  `;

  toDoElements.classList.add(todoIDValue);

  todoList.appendChild(toDoElements);

  // Delete To Do Items
  //const deleteTodoItems = document.getElementsByClassName(todoIDValue);
  //deleteTodoItems.remove();

  /*
  //const todoElement = document.createElement("li");
  toDoElements.id = x;
  toDoElements.innerHTML = `
  <span> ${y} </span>
`;
  todoList.appendChild(todoElements);

  */
}

// console.log(" Reload " + localStorage.getItem("todos"));

//S saveTodo function for recieving input data
function saveTodo() {

  const todoID = Date.now().toString();
  const todoInput = document.getElementById("todo-input").value;

  // Pass the id and inpuit value to new function

  creatTodo(todoID, todoInput);

  /* code for testing
  let myNumber = 2;

  if (myNumber === 2) {
      alert("Data Saved!");
      document.getElementById("todo-input").value = '';
  }
  */

  //console.log("Item 1 = " + todoID);
  //console.log("Item 2 = " + todoInput);
}