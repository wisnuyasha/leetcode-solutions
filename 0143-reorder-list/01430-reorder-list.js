/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    let slow = head, fast = head
    while(fast?.next?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let curr = slow.next, prev = null
    slow.next = null;
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let first = head
    let second = prev
    while(second) {
        let tmp1 = first.next, tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1;
        second = tmp2;
    }
};