// stack using array
class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
  }
  isEmpty() {
    if (this.array.length === 0) {
      console.log("stack is empty");
    }
  }
  pop() {
    if (this.array.length != 0) {
      this.array.pop(this.array.length - 1);
    }
  }
  peek() {
    console.log(this.array[this.array.length - 1]);
  }
  stackList() {
    console.log(this.array);
  }
}
const myStack = new Stack();
myStack.push(12);
myStack.push(20);
myStack.push(40);
myStack.pop();
myStack.peek();
myStack.stackList();

// stack using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPosition = this.top;
      this.top = newNode;
      this.top.next = holdingPosition;
    }
    this.length++;
  }
  pop() {
    if (this.length <= 0) {
      return;
    }
    this.top = this.top.next;
    this.length--;
  }
}
const ourStack = new Stack();
ourStack.push(12);
ourStack.push(20);
ourStack.push(40);
ourStack.pop();
console.log(ourStack);
