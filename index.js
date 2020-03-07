'use strict';
/**
 * 17の倍数のときtrueを返す
 * @param {number} number
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
};
