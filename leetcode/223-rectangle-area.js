/*
https://leetcode.com/problems/rectangle-area/

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area
Assume that the total area is never beyond the maximum possible value of int.
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function (A, B, C, D, E, F, G, H) {
  const left = Math.max(A, E);
  const right = Math.max(Math.min(C, G), left);
  const bottom = Math.max(B, F);
  const top = Math.max(Math.min(D, H), bottom);
  return (C - A) * (D - B) + (G - E) * (H - F) - (right - left) * (top - bottom);
};

module.exports = computeArea;
