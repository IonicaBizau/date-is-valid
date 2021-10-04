"use strict";

/**
 * dateIsValid
 * Check if a date is invalid or not.
 *
 * @name dateIsValid
 * @function
 * @param {Date} d The input date.
 * @returns {Boolean} `true` if the date is valid, `false` otherwise.
 */
module.exports = function dateIsValid (d) {
    // prevent error message in case of an invalid entry
    try {
        d.getTime();
    } catch (error) {
        d = new Date(d);
    }
    let t = d.getTime();
    return t === t;
};
