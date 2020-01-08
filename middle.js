const eqArrays = function(array1, array2) {
 
    if (array1.length === array2.length) {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
    
      }
      return true;
    } else {
      return false;
    }
  };
  
  const assertArraysEqual = function(asArray1, asArray2) {
    const Answer = eqArrays(asArray1, asArray2);
    if (Answer === true) {
      console.log(`🟢🟢🟢 Assertion Passed: ${asArray1} === ${asArray2}.`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${asArray1} !== ${asArray2}`);
    }
  };

  const middle = function(array){
let middleArray = [];
if (array.length <= 2) {return middleArray};
while (array.length > 2) {array.pop(), array.shift()}
return array
  }
  