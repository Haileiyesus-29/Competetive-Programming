/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let arr = [];
    for(let t = 0; t<temp.length; t++){
        let found = false;
        let i = t;
        for(i; i<temp.length; i++){
            if(temp[i] > temp[t]) {
                found = true;
                break;
            }
        }
        if(found) arr.push(i-t);
        else arr.push(0);
    }
    return arr;
};
