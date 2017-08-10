const { ListNode, oddEvenList } = require('./328-odd-even-linked-list');

describe('Odd Even Linked List', () => {

  it('returns correct result when list has only one node', () => {
    const node1 = new ListNode(1);
    const newList = oddEvenList(node1);
    expect(newList).toBe(node1);
  });

  it('returns correct result when list has two nodes', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    const newList = oddEvenList(node1);

    expect(newList).toBe(node1);
    expect(newList.next).toBe(node2);
  });

  it('returns correct result', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const newList = oddEvenList(node1);

    expect(newList).toBe(node1);
    expect(newList.next).toBe(node3);
    expect(newList.next.next).toBe(node5);
    expect(newList.next.next.next).toBe(node2);
    expect(newList.next.next.next.next).toBe(node4);
    expect(newList.next.next.next.next.next).toBe(null);
  });

  it('returns null when input is null', () => {
    expect(oddEvenList(null)).toBe(null);
  });

  it('returns undefined when input is undefined', () => {
    expect(oddEvenList(undefined)).toBe(undefined);
  });

});