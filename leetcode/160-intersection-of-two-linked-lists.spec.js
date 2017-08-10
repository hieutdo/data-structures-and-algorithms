const { ListNode, getIntersectionNode } = require('./160-intersection-of-two-linked-lists');

describe('Intersection of two Linked Lists', () => {
  let a1, a2, b1, b2, b3, c1, c2, c3;

  beforeEach(() => {
    a1 = new ListNode('a1');
    a2 = new ListNode('a2');
    b1 = new ListNode('b1');
    b2 = new ListNode('b2');
    b3 = new ListNode('b3');
    c1 = new ListNode('c1');
    c2 = new ListNode('c2');
    c3 = new ListNode('c3');
  });

  it('returns correct intersection node', () => {
    a1.next = a2;
    a2.next = c1;
    b1.next = b2;
    b2.next = b3;
    b3.next = c1;
    c1.next = c2;
    c2.next = c3;
    expect(getIntersectionNode(a1, b1)).toBe(c1);
  });

  it('returns null when one of the input list is null', () => {
    expect(getIntersectionNode(null, new ListNode(1))).toBe(null);
  });

  it('returns null when no intersection found', () => {
    a1.next = a2;
    b1.next = b2;
    b2.next = b3;
    expect(getIntersectionNode(a1, b1)).toBe(null);
  });

});