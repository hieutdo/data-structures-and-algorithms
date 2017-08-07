/*
https://leetcode.com/problems/meeting-rooms/

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.
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
 * @return {boolean}
 */
// const canAttendMeetings = function (intervals) {
//   const isOverlap = (i1, i2) =>
//     (i1.start >= i2.start && i1.start < i2.end) ||
//     (i2.start >= i1.start && i2.start < i1.end);
//
//   for (let i = 0; i < intervals.length - 1; i++) {
//     for (let j = i + 1; j < intervals.length; j++) {
//       if (isOverlap(intervals[i], intervals[j])) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// Time complexity: O(n^2)

const canAttendMeetings = function (intervals) {
  intervals.sort((i1, i2) => i1.start - i2.start);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end > intervals[i + 1].start) {
      return false;
    }
  }
  return true;
};
// Time complexity: O(nlogn) because of sorting

module.exports = { Interval, canAttendMeetings };
