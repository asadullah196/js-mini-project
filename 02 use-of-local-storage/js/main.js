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
        document.getElementById('buttonImage').src='./img/sun.png';
    }else {
        console.log("Odd Number " + clicks);
        document.getElementById('buttonImage').src='./img/moon.png';
    }

    clicks++;
}

function changeTheme() {
    console.log("Hello");
}