const ftoc = function (temp) {
    let convertedTemp =((temp-32)*(5/9));
    convertedTemp = Math.round(convertedTemp*10)/10;

    return convertedTemp;
};

const ctof = function (temp) {
let convertedTemp = ((temp*(9/5))+32);
convertedTemp = Math.round(convertedTemp*10)/10;
return convertedTemp;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
