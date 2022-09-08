/**
 * Just "Hello" statement for test
 */

console.log("Asadullah Galib!");

// Counts the click numbers

var clicks = 0;
var buttonImage = document.getElementById('buttonImage');
buttonImage.onclick = function () {
    console.log(++clicks);
}

function changeTheme() {
    console.log("Hello");
}