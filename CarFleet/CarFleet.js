/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let ans=0;
    let arr=[];
    for(let i=0;i<position.length;i++){
        arr.push([position[i],speed[i]]);
    }
    arr.sort(function(a,b){return a[0]-b[0]});
    let maxT = Number.MIN_SAFE_INTEGER;
    for(let i=arr.length-1;i>=0;i--){
        let p = arr[i][0];
        let s = arr[i][1];
        let t = (target-p)/s;
        if(t>maxT){
            maxT = t;
            ans++;
        }
    }
    return ans;
};
