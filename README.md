
# date-is-valid [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/date-is-valid.svg)](https://travis-ci.org/IonicaBizau/date-is-valid/) [![Version](https://img.shields.io/npm/v/date-is-valid.svg)](https://www.npmjs.com/package/date-is-valid) [![Downloads](https://img.shields.io/npm/dt/date-is-valid.svg)](https://www.npmjs.com/package/date-is-valid) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a date is valid or not.

## :cloud: Installation

```sh
$ npm i --save date-is-valid
```


## :clipboard: Example



```js
const dateIsInvalid = require("date-is-valid");

console.log(dateIsInvalid(new Date()));
// => true

console.log(dateIsInvalid(new Date("foo")));
// => false
```

## :memo: Documentation


### `dateIsValid(d)`
Check if a date is invalid or not.

#### Params
- **Date** `d`: The input date.

#### Return
- **Boolean** `true` if the date is valid, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
