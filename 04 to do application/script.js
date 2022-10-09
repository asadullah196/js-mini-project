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

// console.log(newTask);
// console.log("Value" + newTask.value);

// // Check input type, never trust the users
// // return if task is empty
// // if (newTask.value === "") {
// //     alert("Please add some task!");
// //     return;
// // }

// Function for creating new task
let creatTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    // console.log(listItem);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = creatTask(newTask.value);

    //console.log("1 - " + listItem.innerText);

    if(listItem.innerText === ""){
        alert("Please add some task!");
        return;
    }

    todoUIs.appendChild(listItem);
    newTask.value = "";

    bindCompleteItems(listItem, completeTask);
}

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

let bindCompleteItems = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let deleteItemsFinal = function (taskItem, deleteBtnClick) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}

for (let i = 0; i < todoUIs.children.length; i++) {
    bindCompleteItems(todoUIs.children[i], completeTask);
}

for (let i = 0; i < finishedTask.children.length; i++) {
    deleteItemsFinal(finishedTask.children[i], deleteTask);
}

form.addEventListener('submit', addTask);