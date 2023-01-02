/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let bl = [];
    for(let i=0; i<l.length; i++){
        bl.push(checker(nums.slice(l[i],r[i]+1)));
    }
    return bl;
};
function checker(arr){
    arr.sort((a,b) => b - a);
    if(arr.length <= 2) return true;
    let diff = arr[0] - arr[1];
    for(let i=1; i<arr.length-1 ; i++){
        if(arr[i] - arr[i+1] !== diff){
            return false;
        }
    }
    return true;
}
