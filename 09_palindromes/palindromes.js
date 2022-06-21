const palindromes = function (string) {
    let word = string.replace(/[/\s.,!\-]/g,"").toLowerCase();
    let backwardsWord = word.split("");
    backwardsWord = backwardsWord.reverse();
    backwardsWord = backwardsWord.join("")
    backwardsWord = backwardsWord.toLowerCase()
    console.log(word)
    console.log(backwardsWord)
    return word === backwardsWord;
};

// Do not edit below this line
module.exports = palindromes;
