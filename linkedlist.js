class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(value, index) {
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index < this.length) {
      this.prepend(value);
      return;
    }
    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let currentPosition = leader.next;
    leader.next = newNode;
    newNode.next = currentPosition;
    this.length++;
  }

  traverseToIndex(index) {
    let rootNode = this.head;
    let counter = 0;
    while (counter != index) {
      rootNode = rootNode.next;
      counter++;
    }
    return rootNode;
  }

  remove(index) {
    if (index > this.length) {
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const currentPosition = leader.next;
    leader.next = currentPosition.next;
    this.length--;
  }

  printList() {
    let list = [];
    let headNode = this.head;

    while (headNode != null) {
      list.push(headNode.value);

      headNode = headNode.next;
    }
    return list;
  }
}
const linkedList = new LinkedList(12);
linkedList.prepend(9);
linkedList.append(4);
linkedList.insert(90, 1);
linkedList.remove(1);
console.log(linkedList.printList());
