/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let foundArr = [];
    nums = nums.sort((a,b) => a - b);
    nums.forEach((num, idx) => {
        if(num === target) foundArr.push(idx);
    });
    return foundArr;
};
