const reverseString = function(text) {
let textToReverese = text;
let textToArray = textToReverese.split("");
textToArray = textToArray.reverse();
let arrayToString = textToArray.join("");
//return textToArray;
    return arrayToString;
};

// Do not edit below this line
module.exports = reverseString;
