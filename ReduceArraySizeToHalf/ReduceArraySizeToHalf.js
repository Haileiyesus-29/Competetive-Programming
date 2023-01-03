/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    arr.sort((a,b) => a - b);
    let idx = [];
    arr.forEach((el,i,arr) => {
        if(arr[i-1] !== el) {
            idx.push(1);
        }
        else idx[idx.length-1]++;
    })
    let tot = 0;
    let i=0;
    idx.sort((a,b) => b-a);
    do{
        tot+=idx[i];
        i++;
    } while(tot<arr.length/2);
    return i;  
};
