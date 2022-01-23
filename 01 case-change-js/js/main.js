/**
 * lowerCase Converstion
 * 
 * @returns string/input
 */

function lowerCase() {
    var x = document.getElementById("formInput");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    document.getElementById('userInput').value = text.toLowerCase();
}

/**
 * upperCase Converstion
 * 
 * @returns string/input
 */

 function upperCase() {
    var x = document.getElementById("formInput");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    document.getElementById('userInput').value = text.toUpperCase();
}

/**
 * sentanceCase Converstion
 * 
 * @returns string/input
 */

 function sentanceCase() {
    var x = document.getElementById("formInput");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value;
    }
    document.getElementById('userInput').value = text.toUpperCase();
}