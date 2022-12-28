/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let lessThan = new Array(nums.length).fill(0);
    nums.forEach((el, idx, arr) => {
        arr.forEach((arEl) => {
            if(el > arEl) {
                lessThan[idx]++;
            }
        })
    })
    return lessThan;
};
