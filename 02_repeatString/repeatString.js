const repeatString = function(string,num) {
    let i = 0;
    let text = '';
    if (num<0){
        return 'ERROR'
    }
    else{
    while (i<num){
        i++;
        text+=string;
    }
    return text;
        }
};

// Do not edit below this line
module.exports = repeatString;
