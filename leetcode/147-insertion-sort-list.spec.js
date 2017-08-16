const { ListNode, insertionSortList } = require('./147-insertion-sort-list');

describe('Insertion Sort List', () => {

  it('can sort the linked list ascending', () => {
    const node5 = new ListNode(5);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node2 = new ListNode(2);
    const node1 = new ListNode(1);
    const node6 = new ListNode(6);
    node5.next = node3;
    node3.next = node4;
    node4.next = node2;
    node2.next = node1;
    node1.next = node6;
    const sortedList = insertionSortList(node5);
    expect(sortedList).toBe(node1);
    expect(node1.next).toBe(node2);
    expect(node2.next).toBe(node3);
    expect(node3.next).toBe(node4);
    expect(node4.next).toBe(node5);
  });

});