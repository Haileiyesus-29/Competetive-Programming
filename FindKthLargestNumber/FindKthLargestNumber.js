/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b) => {
      let x = BigInt(a);
      let y = BigInt(b);
      return x >= y ? -1:1;
    })
    return nums[k-1];
};
