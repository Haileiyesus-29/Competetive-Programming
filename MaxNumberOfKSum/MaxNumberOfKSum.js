var maxOperations = function(nums,k){
    let map = new Map
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= k){continue}
        let y = k - nums[i]

        if(map.get(nums[i]) >= 1){
            map.set(nums[i],map.get(nums[i])-1)
            count++
        }
        else{
            map.set(y,map.get(y)+1||1)
        }
    }
    return count;
}
