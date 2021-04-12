const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    function countListNode(l) {
      if (!l) {
        return 0;
      }
      if (l.next === null) {
        return 1;
      }
      return 1 + countListNode(l.next);
    }
    return countListNode(this.listNode);
  }

  enqueue(element) {
    const newListNode = new ListNode(element);
    function addElement(l, addListNode) {
      const copyListNode = l;
      if (!copyListNode.next) {
        copyListNode.next = addListNode;
        return copyListNode;
      }
      copyListNode.next = addElement(l.next, addListNode);
      return copyListNode;
    }
    if (!this.listNode) {
      this.listNode = newListNode;
    } else {
      this.listNode = addElement(this.listNode, newListNode);
    }
  }

  dequeue() {
    const deleteListNode = this.listNode.value;
    this.listNode = this.listNode.next;
    return deleteListNode;
  }
}

module.exports = Queue;
