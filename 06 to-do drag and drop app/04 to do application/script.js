/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Asadullah Galib ( Orginal Sumit vai)
 * Date: 09/10/2022
 *
 */

// Select elemenst and assigned them inside variable
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUIs = document.querySelector('#items');
let finishedTask = document.querySelector('.complete-list ul');

// Function for creating new task
let creatTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    // Add draggable="true"
    // .setAttribute("draggable", "true");
    listItem.setAttribute("class", "item draggable");
    listItem.setAttribute("draggable", "true");

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

// Define addTask function
let addTask = function (event) {
    event.preventDefault();
    let listItem = creatTask(newTask.value);

    // Check input value blank or not
    if (listItem.innerText === "") {
        alert("Please add some task!");
        return;
    }

    todoUIs.appendChild(listItem);
    newTask.value = "";

    // Add checkbox with the list items
    // Function call
    bindCompleteItems(listItem, completeTask);
}

// Define completeTask function
let completeTask = function () {
    let listItem = this.parentNode;
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete Task'
    deletBtn.className = 'delete';
    listItem.appendChild(deletBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    finishedTask.appendChild(listItem);

    deleteItemsFinal(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// Add checkbox with the list items
// Function define
let bindCompleteItems = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let deleteItemsFinal = function (taskItem, deleteBtnClick) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}

// add old todo in the list
for (let i = 0; i < todoUIs.children.length; i++) {
    bindCompleteItems(todoUIs.children[i], completeTask);
}

for (let i = 0; i < finishedTask.children.length; i++) {
    deleteItemsFinal(finishedTask.children[i], deleteTask);
}

// Call addTask function
form.addEventListener('submit', addTask);

// Drag and Drop Function Goes Here

document.body.addEventListener("dragstart", function(e) {
    e.target.classList.add('dragging');
    //draggable.classList.add('dragging');
    console.log("Dragged!");
});

document.body.addEventListener("dragend", function(e) {
    e.target.classList.add('dragging');
    //draggable.classList.add('dragging');
    console.log("Dragged End!");
});

//const draggables = document.querySelectorAll('.draggable')
//const containers = document.querySelectorAll('.item')

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('dragging');

    
//   })

// //   draggable.addEventListener('dragend', () => {
// //     draggable.classList.remove('dragging');
// //   })
// })


