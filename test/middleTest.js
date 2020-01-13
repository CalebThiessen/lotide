const middle = require("../middle");
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [3] for [4, 3, 6]", () => {
    assert.deepEqual(middle([4, 3, 6]), [3]);
  });
  it("returns [6, 8] for [10, 61, 6, 8, 13, 6]", () => {
    assert.deepEqual(middle([10, 61, 6, 8, 13, 6]), [6, 8]);
  });
  it("returns [] for [1, 5]", () => {
    assert.deepEqual(middle([1, 5]), []);
  });
});