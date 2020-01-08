const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};
const countLetters = function(sentence) {
  numOfLetters = {};
  for (let letter = 0; letter < sentence.length; letter++) {
    if (numOfLetters[sentence[letter]]) {
      numOfLetters[sentence[letter]] += 1;
    } else {
      numOfLetters[sentence[letter]] = 1;
    }
  }
  delete numOfLetters[" "];
  return numOfLetters;
};
console.log(countLetters("Hello how goes"));