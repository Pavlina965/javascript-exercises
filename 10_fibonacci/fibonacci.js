const fibonacci = function(member) {
    let num1 = 0;
    let num2 = 1;
    let temp;
    if(member<0){
        return 'OOPS'
    }
    else {
        for (let i = 0; i < member; i++) {
            temp = num2;
            num2 = num1 + num2
            num1 = temp
        }
        return num1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
