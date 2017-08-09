const { ListNode, hasCycle } = require('./141-linked-list-cycle');

describe('Linked List Cycle', () => {

  it('returns true when the list has a cycle in it', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head;
    expect(hasCycle(head)).toBe(true);
  });

  it('returns false when the list does not have a cycle in it', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    expect(hasCycle(head)).toBe(false);
  });

  it('returns false when the list has only one node', () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  });

  it('returns false when the list is null or undefined', () => {
    expect(hasCycle(null)).toBe(false);
    expect(hasCycle(undefined)).toBe(false);
  });

});