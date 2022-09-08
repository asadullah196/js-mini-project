/**
 * Just "Hello" statement for test
 */

console.log("Asadullah Galib!");

// Counts the click numbers

var clicks = 0;
var buttonImage = document.getElementById('buttonImage');
buttonImage.onclick = function () {
    
    if(clicks%2 === 0) {
        console.log("Even Number " + clicks);
    }else {
        console.log("Odd Number " + clicks);
    }

    clicks++;
}

function changeTheme() {
    console.log("Hello");
}