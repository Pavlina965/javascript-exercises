const sumAll = function (num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        if (num1 < 0 || num2 < 0) {
            return 'ERROR'
        } else {

            let min = Math.min(num1, num2)
            let max = Math.max(num1, num2);
            let num = 0;

            for (let i = min; i <= max; i++) {
                num += i;

            }
            return num;
        }

    } else {
        return 'ERROR'
    }

};
//console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
