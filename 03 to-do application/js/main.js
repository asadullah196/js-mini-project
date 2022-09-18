// Log test
let myName = "Asadullah";
console.log("myName");

let myId = document.getElementById("todo-submit").innerHTML;

function saveTodo() {

    const todoID = Date.now().toString();
    const todoInput = document.getElementById("todo-input").value;

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