"use strict";

/**
 * dateIsValid
 * Check if a date is invalid or not.
 *
 * @name dateIsValid
 * @function
 * @param {Date | ISOString} d The input date.
 * @returns {Boolean} `true` if the date is valid, `false` otherwise.
 */
module.exports = function dateIsValid (d) {
    let t = NaN;
    try {
        t = d.getTime();
    } catch (error) {
        if (typeof d === "string") {
            t = Date.parse(d);
        }
    }
    return t === t;
};
