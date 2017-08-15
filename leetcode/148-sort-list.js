/*
https://leetcode.com/problems/sort-list/

Sort a linked list in O(n log n) time using constant space complexity.
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const merge = function (left, right) {
  const head = new ListNode();
  let p = head;

  while (left !== null || right !== null) {
    if (left === null) {
      p.next = right;
      right = right.next;
    } else if (right === null) {
      p.next = left;
      left = left.next;
    } else if (left.val < right.val) {
      p.next = left;
      left = left.next;
    } else {
      p.next = right;
      right = right.next;
    }
    p = p.next;
  }

  return head.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
  if (head === null || head.next === null) return head;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return merge(sortList(head), sortList(slow));
};

module.exports = { ListNode, sortList };
