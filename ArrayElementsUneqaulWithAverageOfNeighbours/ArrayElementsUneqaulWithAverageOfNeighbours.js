var rearrangeArray = function(nums){
  nums.sort((a, b) => a-b); 
  let result = [];
  let left = 0;
  let right = nums.length-1;  
  while(left < right){
    result.push(nums[left++]);
    result.push(nums[right--]);
  }  
  if(left == right) result.push(nums[left]);
  return result;
};
