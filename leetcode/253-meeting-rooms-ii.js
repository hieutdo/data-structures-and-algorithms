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
  if (!intervals || intervals.length === 0) {
    return 0;
  }
  const starts = [];
  const ends = [];

  intervals.forEach(({ start, end }) => {
    starts.push(start);
    ends.push(end);
  });

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let rooms = 0;
  let pre = 0;

  for (let i = 0; i < intervals.length; i++) {
    rooms++;
    if (starts[i] >= ends[pre]) {
      rooms--;
      pre++;
    }
  }

  return rooms;
}

const Interval = require('./Interval');

console.log(
  minMeetingRooms([
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20),
  ]) === 2
);

module.exports = minMeetingRooms;
