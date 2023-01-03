/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    nums.sort((a,b) => a - b);
    let num = [[nums[0],1]];
    for(let i=1; i<nums.length; i++){
        let k = num[num.length-1];
        if(k[0] !== nums[i]) {
            num.push([nums[i],1])
        } else k[1]++;
    }
    num.sort((a,b) => b[1] - a[1]);
    return num.map(el => el[0]).slice(0,k);
};
