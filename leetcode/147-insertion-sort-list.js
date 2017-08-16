/*
https://leetcode.com/problems/insertion-sort-list/

Sort a linked list using insertion sort.
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
const insertionSortList = function (head) {
  const l = new ListNode();
  let curr = head;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    let p = l;
    while (p.next !== null && p.next.val < curr.val) {
      p = p.next;
    }
    curr.next = p.next;
    p.next = curr;
    curr = next;
  }
  return l.next;
};

module.exports = { ListNode, insertionSortList };