const tester = require("tester")
    , isValid = require("..")
    ;

tester.describe("date-is-valid", t => {
    t.should("detect valid dates", () => {
        t.expect(isValid(new Date("foo"))).toBe(false);
        t.expect(isValid(new Date())).toBe(true);
    });
});
