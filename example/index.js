"use strict";

const dateIsInvalid = require("../lib");

console.log(dateIsInvalid(new Date()));
// => true

console.log(dateIsInvalid(new Date("foo")));
// => false
