const add = function(num1,num2) {
	return num1+ num2;
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiply = array[0]
  for (let i = 1; i < array.length; i++) {
    multiply = multiply * array[i]
    //console.log(multiply)
  }
return multiply
};

const power = function(num1,num2) {
  return Math.pow(num1,num2)
	
};

const factorial = function(num) {
  let factorial=1;
  if (num ===0|| num ===1){
    return factorial = 1;
  }
  else {
  for (let i = 1; i <= num; i++) {
    factorial *=i;

  }
    return factorial;

  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
