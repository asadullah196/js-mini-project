function myLocalStorage() {

    localStorage.setItem("myName", "Asadullah");

    console.log(localStorage.getItem("myName"));
    
   // console.log("Hello Galib");
}

myLocalStorage();



/**
 * Just "Hello" statement for test
 */

//console.log("Asadullah Galib!");


// Counts the click numbers

var clicks = 0;
var buttonImage1 = document.getElementById('buttonImage');


buttonImage1.onclick = function () {

    //localStorage.setItem("myNumber", "1");

    //let myNum = localStorage.getItem("myNumber");
    // console.log(myNum);


    if (clicks % 2 === 0) {
        //console.log("Even Number " + clicks);

        // Pass Data to local storage

        localStorage.setItem("imageName", "./img/sun.png");
        //console.log(localStorage.getItem("imageName"));

        document.getElementById('buttonImage').style.src = localStorage.getItem("imageName");

        //document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        //console.log("Test 3 " + document.getElementById('buttonImage').src);

        /*
        if (localStorage) {
            //console.log(localStorage.getItem("imageName"));

            console.log("Test 1 " + localStorage.getItem("imageName"));

            document.getElementById('buttonImage').src = localStorage.getItem("imageName");

            console.log("Test 2 " + document.getElementById('buttonImage').src);

        } else {
            document.getElementById('buttonImage').src = './img/sun.png';
        }


        */

        //document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        document.getElementById("myName").style.color = '#000000';
        document.getElementById("main-body").style.backgroundColor = '#ffffff';
    } else {

        // Pass Data to local storage

        localStorage.setItem("imageName", "./img/moon.png");

        document.getElementById('buttonImage').style.src = localStorage.getItem("imageName");

        //document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        //console.log("Test 3 " + document.getElementById('buttonImage').src);

        /*
        if (localStorage) {
            //console.log(localStorage.getItem("imageName"));
            document.getElementById('buttonImage').src = localStorage.getItem("imageName");

            console.log("Test 3 " + document.getElementById('buttonImage').src);

        } else {
            document.getElementById('buttonImage').src = './img/moon.png';
        }

        */

        //console.log(localStorage.getItem("imageName"));
        //document.getElementById('buttonImage').src = localStorage.getItem("imageName");

        //console.log("Odd Number " + clicks);
        //document.getElementById('buttonImage').src='./img/moon.png';
        document.getElementById("myName").style.color = '#ffffff';
        document.getElementById("main-body").style.backgroundColor = '#000000';
    }

    clicks++;

    console.log(localStorage.getItem("imageName"));

}