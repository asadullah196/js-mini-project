/**
 * Just "Hello" statement for test
 */

//console.log("Asadullah Galib!");


// Counts the click numbers

var clicks = 0;
var buttonImage1 = document.getElementById('buttonImage');


buttonImage1.onclick = function () {

    if (clicks % 2 === 0) {
        //console.log("Even Number " + clicks);

        // Pass Data to local storage

        localStorage.setItem("imageName", "./img/sun.png");
        //console.log(localStorage.getItem("imageName"));

        if (localStorage) {
            //console.log(localStorage.getItem("imageName"));
            document.getElementById('buttonImage').style.src = localStorage.getItem("imageName");

        } else {
            document.getElementById('buttonImage').style.src = './img/sun.png';
        }

        document.getElementById("myName").style.color = '#000000';
        document.getElementById("main-body").style.backgroundColor = '#ffffff';
    } else {

        // Pass Data to local storage

        localStorage.setItem("imageName", "./img/moon.png");

        if (localStorage) {
            //console.log(localStorage.getItem("imageName"));
            document.getElementById('buttonImage').style.src = localStorage.getItem("imageName");

        } else {
            document.getElementById('buttonImage').style.src = './img/moon.png';
        }

        document.getElementById("myName").style.color = '#ffffff';
        document.getElementById("main-body").style.backgroundColor = '#000000';
    }

    clicks++;

    console.log(localStorage.getItem("imageName"));

}