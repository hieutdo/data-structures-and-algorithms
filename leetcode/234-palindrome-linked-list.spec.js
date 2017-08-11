const { ListNode, isPalindrome } = require('./234-palindrome-linked-list');

describe('Palindrome Linked List', () => {

  it('returns true when the list is a even palindrome', () => {
    const node1 = new ListNode('a');
    const node2 = new ListNode('b');
    const node3 = new ListNode('c');
    const node4 = new ListNode('c');
    const node5 = new ListNode('b');
    const node6 = new ListNode('a');

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;

    expect(isPalindrome(node1)).toBe(true);
  });

  it('returns true when the list is a odd palindrome', () => {
    const node1 = new ListNode('a');
    const node2 = new ListNode('b');
    const node3 = new ListNode('c');
    const node4 = new ListNode('b');
    const node5 = new ListNode('a');

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    expect(isPalindrome(node1)).toBe(true);
  });

  it('returns false when the list is not a palindrome', () => {
    const node1 = new ListNode('a');
    const node2 = new ListNode('b');
    const node3 = new ListNode('c');

    node1.next = node2;
    node2.next = node3;

    expect(isPalindrome(node1)).toBe(false);
  });

});