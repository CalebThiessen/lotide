const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
    
  };
  head = (input) => {
      return input[0];
  }
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 