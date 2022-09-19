// Log test
let myName = "Asadullah";
console.log("myName");

let myId = document.getElementById("todo-submit").innerHTML;

const todoList = "xyz";

// Todo function
function creatTodo (todoID, todoInput) {

    const toDoElements = document.createElement("li");

    const x = todoID;
    console.log("X value = " + todoList);
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

    console.log("Item 1 = " + todoID);
    console.log("Item 2 = " + todoInput);
}