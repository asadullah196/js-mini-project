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
let finishedTask = document.querySelector('.complete-list');

// Function for creating new task
let creatTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerHTML = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    // console.log(listItem);
    
    return listItem;
}