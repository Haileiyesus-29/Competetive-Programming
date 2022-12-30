/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let str = nums.join('');
    let arStr = str.split('');
    arStr.sort((a,b) => b - a);
    return arStr.join('');
};
