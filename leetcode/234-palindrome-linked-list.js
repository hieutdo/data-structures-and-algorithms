/*
https://leetcode.com/problems/palindrome-linked-list/

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverse = function (head) {
  let curr = head;
  let prev = null;
  let temp = null;
  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

const compare = function (headA, headB) {
  let p = headA;
  let q = headB;
  while (p !== null && q !== null) {
    if (p.val !== q.val) {
      return false;
    }
    p = p.next;
    q = q.next;
  }
  return true;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (!head) return true;
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow = reverse(slow);
  return compare(slow, head);
};

module.exports = { ListNode, isPalindrome };
