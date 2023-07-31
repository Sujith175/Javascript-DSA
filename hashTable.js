class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    let address = this._hash(key);

    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return "Data Not Found";
    }
  }
  delete(key) {
    let address = this._hash(key);

    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          delete currentBucket[i][0];
          delete currentBucket[i][1];
        }
      }
    } else {
      return "requested data not found";
    }
  }
}

const myHash = new HashTable(10);
myHash.set("name", "sujith");
myHash.set("address", "Aradhana House, Puliyoor(po), chengannur");
myHash.delete("name");
myHash.get("address");
