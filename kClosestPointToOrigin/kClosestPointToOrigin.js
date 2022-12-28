/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distance = [];
    points.forEach((el) => {
        let d = (el[0]*el[0]) + (el[1]*el[1]);
        distance.push(d);
    });
    let temp = [...distance];
    let sorted = temp.sort((a,b) => a - b);
    let indexes = new Array(sorted.length).fill(-1);
    for(let i = 0; i<sorted.length; i++) {
        for(let j=0; j< distance.length; j++) {
            if(sorted[i] === distance[j]) {
                indexes[i] = j;
            }
        }
    }
    let closest = new Array(k).fill(-1);
    for(let i = 0; i < k; i++) {
        closest[i] = points[indexes[i]];
    }
    return closest;
};
