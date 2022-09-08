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
function sentanceCase(){
    textSanple = document.getElementById('userInput').value;
    document.getElementById('userInput').innerHTML = titleCase(textSanple);
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}