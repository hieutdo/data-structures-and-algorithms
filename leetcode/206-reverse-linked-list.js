/*
https://leetcode.com/problems/reverse-linked-list/description/

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let curr = head;
  let prev = null;
  let temp = null;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

const reverseListRecursive = function (head) {
  if (head === null || head.next === null) return head;
  const p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

module.exports = { ListNode, reverseList, reverseListRecursive };
