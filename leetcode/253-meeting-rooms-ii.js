/*
https://leetcode.com/problems/meeting-rooms-ii/

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
  const starts = [];
  const ends = [];
  let s = 0;
  let e = 0;
  let rooms = 0;
  let available = 0;
  intervals.forEach(i => {
    starts.push(i.start);
    ends.push(i.end);
  });
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  while (s < starts.length) {
    if (starts[s] < ends[e]) {
      if (available === 0) {
        rooms++;
      } else {
        available--;
      }
      s++;
    } else {
      available++;
      e++;
    }
  }
  return rooms;
}

const Interval = require('./Interval');

minMeetingRooms([
  new Interval(0, 30),
  new Interval(5, 10),
  new Interval(15, 20)
]);

module.exports = minMeetingRooms;
