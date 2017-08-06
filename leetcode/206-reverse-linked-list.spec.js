const { ListNode, reverseList, reverseListRecursive } = require('./206-reverse-linked-list');

describe('Reverse Linked List', () => {

  it('can reverse a linked list correctly', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    const newHead = reverseList(head);

    expect(newHead.val).toBe(3);
    expect(newHead.next.val).toBe(2);
    expect(newHead.next.next.val).toBe(1);
  });

  it('can recursively reverse a linked list correctly', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    const newHead = reverseListRecursive(head);

    expect(newHead.val).toBe(3);
    expect(newHead.next.val).toBe(2);
    expect(newHead.next.next.val).toBe(1);
  });

});