// Log test
let myName = "Asadullah";
//console.log("myName");

//let myId = document.getElementById("todo-submit").innerHTML;

const todoList = document.getElementById("sample-output-list");

// Todo function
function creatTodo(todoID, todoInput) {

    //const toDoElements = document.createElement("li");
    const todoElement = document.createElement("li");

    const todoIDValue = todoID;
    const todoInputValue = todoInput;
    //console.log("X value = " + todoIDValue);
    //console.log("y value = " + todoInputValue);

    var toDoElements = document.createElement("li");

    toDoElements.innerHTML = `
    <span> ${todoInputValue} </span>&nbsp;&nbsp;
    <i class="fa fa-times" aria-hidden="true"></i>&nbsp;
    <i class="fa fa-check" aria-hidden="true"></i>
  `;

    toDoElements.classList.add(todoIDValue);

    todoList.appendChild(toDoElements);

    // Delete To Do Items
    //const element = document.getElementById("demo");
    //element.remove();

    /*
    //const todoElement = document.createElement("li");
    toDoElements.id = x;
    toDoElements.innerHTML = `
    <span> ${y} </span>
  `;
    todoList.appendChild(todoElements);

    */
}

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