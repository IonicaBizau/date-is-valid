const tester = require("tester")
    , isValid = require("..")
    ;

tester.describe("date-is-valid", t => {
    t.should("detect valid dates", () => {
        t.expect(isValid(new Date("foo"))).toBe(false);
        t.expect(isValid(new Date())).toBe(true);
        t.expect(isValid("2023-10-01T16:01:52.525Z")).toBe(true);
        t.expect(isValid("2023-15-01T16:01:52.525Z")).toBe(false);
        t.expect(isValid("bar")).toBe(false);
    });
});
