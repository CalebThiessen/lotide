const tail = require("../tail");
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 'bar' for ['foo', 'bar']", () => {
    assert.strictEqual(tail(["foo", "bar"]), "bar");
  });
  it("returns 'baz' for ['cup', 'scint-ilating', 'baz']", () => {
    assert.strictEqual(tail(['cup', 'scint-ilating', 'baz']), "baz");
  });
});
