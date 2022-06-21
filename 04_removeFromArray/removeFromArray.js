const removeFromArray = function (array, whatToDelete) {
    let arr = array;
    for (let i = 1; i < arguments.length; i++) {
        if(arr.includes(arguments[i])) {
            let num = arguments[i]
            let numToDelete = arr.indexOf(num);
            let removed = arr.splice(numToDelete, 1)
        }
    }
    return arr

};
//console.log(removeFromArray([1,2,3,4],6,'jes'))

// Do not edit below this line
module.exports = removeFromArray;
