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

    text = text.toLowerCase();
    // document.getElementById('userInput').value = text;

    str = text.split(' ');

    document.getElementById('userInput').value = str;

    /*
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"

    */
}