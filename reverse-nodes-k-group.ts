/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  
  return reverse(head, k, null, null, k, head)
  
  function reverse(head: ListNode | null, k: number, acc: ListNode | null, accTail: ListNode | null, originalK: number, inMotionHead: ListNode | null): ListNode | null {
    if (head === null) {
      if (k === 0) {
        return acc
      } else {
        return inMotionHead
      }
    }
    if (k < 1) {
      if (accTail !== null) {
        accTail.next = reverse(head, originalK, null, null, originalK, head)
      }
      return acc
    }
    const currentLN = new ListNode(head.val, acc)
    if (accTail === null) {
      accTail = currentLN
    }
    return reverse(head.next, k - 1, currentLN, accTail, originalK, inMotionHead)
  }
  
};
