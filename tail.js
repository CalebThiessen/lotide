const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

tail = (input) => {
  let tailArray = [];
  let i  = 1;
  while (i < input.length) {
    tailArray.push(input[i]), ++i;
  }
  console.log(tailArray);
};

tail(["foo"]);