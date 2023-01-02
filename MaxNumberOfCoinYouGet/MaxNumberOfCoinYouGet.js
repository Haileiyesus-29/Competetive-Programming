/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b) => b - a);
    let length = (piles.length/3)*2;
    let max = 0;
    for(let i=1; i<length; i+= 2){
        max += piles[i];
    }
    return max;
};
