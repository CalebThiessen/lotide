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

const words = ["vielleicht", "fahre", "Ich", "nach", "San", "Diego"];
function mapper(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = mapper(words, word => word[0]);

assertArraysEqual(results1[1], "f");
assertArraysEqual(results1[3], "S");
assertArraysEqual(results1[5], "D");