/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    let curr = head
    let prev = null

    while (curr !== null) {
        // Store the next node of the current node (2 -> 5)
        let next = curr.next;
        // Reverse the direction of current.next to point to null (null <- 1)
        curr.next = prev;
        // Move prev to the current node (1)
        prev = curr;
        // Move curr to the next node (line 1)
        curr = next;
    }
    return prev
};