/*
https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
 */

/**
 * Definition for an interval.
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a.start - b.start);

  let s = intervals[0].start;
  let e = intervals[0].end;
  let result = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= e) {
      e = Math.max(e, intervals[i].end);
    } else {
      result.push(new Interval(s, e));
      s = intervals[i].start;
      e = intervals[i].end;
    }
  }

  // add the last interval
  result.push(new Interval(s, e));

  return result;
};

module.exports = { Interval, merge };
