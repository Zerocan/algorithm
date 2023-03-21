/**
 * 散列表
 */

// 基础的散列表
class HashTable {
  constructor() {
    this.table = [];
  }

  // 散列函数
  loseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    //为了得到比较小的数值，我们会用hash和任意数除余
    return hash % 37;
  }

  put(key, value) {
    const position = this.loseHashCode(key);
    this.table[position] = value;
  }

  remove(key) {
    this.table[this.loseHashCode(key)] = undefined;
  }

  get(key) {
    console.log(this.table[this.loseHashCode(key)]);
  }

  print() {
    for (let i = 0;i < this.table.length; ++i){
      if (this.table[i] !== undefined){
        console.log(i + ':' + this.table[i]);
      }
    }
  }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.remove('Gandalf')
hash.get('Gandalf')
hash.get('Tyrion')
hash.print()