
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
const takeUntil = function(array, callback) {
  results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return;
    }
  }
  return results;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual([results[6]],[undefined]);
