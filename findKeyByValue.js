const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const findKeyByValue = function(objToScan, valueToPick) {
  let showsArray = [];
  showsArray.push(Object.keys(objToScan));

  for (const genre in objToScan) {
    if (objToScan[genre] === valueToPick) {
    
      return genre;
    }
  }



};
  
const bestTVShowsByGenre = {
  sci_fi: "Black Mirror",
  comedy: "The Simpsons",
  drama:  "Six Feet Under"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Simpsons"));
  