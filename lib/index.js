"use strict";

/**
 * dateIsValid
 * Check if a value can be converted into a valid Date object.
 *
 * @name dateIsValid
 * @function
 * @param {Date | ISOString} input The input value to check.
 * @returns {Boolean} `true` if the input can be converted to a valid Date, `false` otherwise.
 */
module.exports = function dateIsValid(input) {
    try {
        let timestamp;
        if (input instanceof Date) {
            timestamp = input.getTime();
        } else if (typeof input === "string") {
            timestamp = Date.parse(input);
        } else {
            return false; // Return false for non-Date inputs.
        }

        return !isNaN(timestamp);
    } catch (error) {
        return false; // Handle unexpected errors by returning false.
    }
};
