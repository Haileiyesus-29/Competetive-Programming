/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
      if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  console.log(...intervals)
  var prev = intervals[0]
  console.log(prev)
  var res = [prev]
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
};
