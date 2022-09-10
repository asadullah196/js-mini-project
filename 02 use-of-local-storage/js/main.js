/**
 * Just "Hello" statement for test
 */

//console.log("Asadullah Galib!");

// Counts the click numbers

var clicks = 0;
var buttonImage = document.getElementById('buttonImage');
buttonImage.onclick = function () {
    
    if(clicks%2 === 0) {
        //console.log("Even Number " + clicks);

        // Pass Data to local storage

        localStorage.setItem("imageName","./img/sun.png");
        //console.log(localStorage.getItem("imageName"));
        document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        document.getElementById("myName").style.color = '#000000';
        document.getElementById("main-body").style.backgroundColor = '#ffffff';
    }else {

        // Pass Data to local storage

        localStorage.setItem("imageName","./img/moon.png");
        //console.log(localStorage.getItem("imageName"));
        document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        //console.log("Odd Number " + clicks);
        //document.getElementById('buttonImage').src='./img/moon.png';
        document.getElementById("myName").style.color = '#ffffff';
        document.getElementById("main-body").style.backgroundColor = '#000000';
    }

    clicks++;
}

function changeTheme() {
    console.log("Hello");
}