
//ASSERTION CHECKER

const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const Answer = actual;
  if (Answer === true)  {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

//ARRAY CHECKER
const eqArrays = function(array1, array2) {
 
  if (array1.length === array2.length) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
  
    }
    return true;
  } else {
    return false;
  }
};
  
//OBJECT CHECKER
const eqObjects = function(Obj1,Obj2) {
  if (Object.keys(Obj1).length !== Object.keys(Obj2).length) {
    return false;
  } else for (const label in Obj1)
  
    if (Array.isArray(Obj1[label]) && Array.isArray(Obj2[label])) {
      if (eqArrays(Obj1[label], Obj2[label]) === false) {
        return false;
      }
    } else {
      if (Obj1[label] !== Obj2[label]) return false;
    }
  return true;
};

const ab = { a: "1", b: [3] };
const ba = { b: [3], a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", b: "2", a: "1" }



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(ab,ba)
