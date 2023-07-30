class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    if (!value) {
      return;
    }
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }

  shiftItem(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return;
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = value;
    this.length++;
  }
}
const myArray = new Array();

myArray.push(10);
myArray.push(9);
myArray.push(2);
myArray.push(8);
myArray.insert(2, 67);
console.log(myArray);
