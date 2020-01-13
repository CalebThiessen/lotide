const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([3,5,2,6,8,6,4,2]), [6,8]);
assertArraysEqual(middle([4,3,6]), [3]);
assertArraysEqual(middle([8,5]), []);