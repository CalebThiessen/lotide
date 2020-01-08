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

  

  const without = function(fullArray, filterOut) {
let filteredArray = [];
for (let i = 0; i < fullArray.length; i++) {
        for (let j = 0; j < filterOut.length; j++) {
               if (filterOut[j] !== fullArray[i]) {
                     filteredArray.push(filterOut[j])
               }
           }

    }
return filteredArray


  }
console.log(without([1,2,"3"], ["a","3","h"]));