/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  get length() {
    return Object.keys(this).length;
  }

  push(element) {
    this[this.length] = element;
  }

  pop() {
    const removeItem = this[this.length - 1];
    delete this[this.length - 1];
    return removeItem;
  }

  peek() {
    return this[this.length - 1];
  }
}

module.exports = Stack;
