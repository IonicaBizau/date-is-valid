"use strict";

const dateIsInvalid = require("../lib");

console.log(dateIsInvalid(new Date()));
// => true

console.log(dateIsInvalid(new Date("foo")));
// => false

console.log(dateIsInvalid("2023-10-01T16:01:52.525Z"));
// => true
