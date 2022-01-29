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

    let str = text.toLowerCase();

    //document.getElementById('userInput').value = str;

    function sentanceCaseFunction(str) {

        // Step 1. Lowercase the string
        str = str.toLowerCase();
        // str = "I'm a little tea pot".toLowerCase();
        // str = "i'm a little tea pot";

        // Step 2. Split the string into an array of strings
        str = str.split(' ');
        // str = "i'm a little tea pot".split(' ');
        // str = ["i'm", "a", "little", "tea", "pot"];

        // Step 3. Create the FOR loop
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }

        // Step 4. Return the output
        return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"

    }

    /*
    text = text.toLowerCase();
    // document.getElementById('userInput').value = text;

    str = text.split(' ');
    //document.getElementById('userInput').value = str;


    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    // Step 4. Return the output
    document.getElementById('userInput').value = str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
*/
}