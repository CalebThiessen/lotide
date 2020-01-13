const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail(["foo", "bar"]), "bar");
