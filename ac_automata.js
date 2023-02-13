MAX_LEN = 128;

class ACNode {
  constructor(data) {
    this.data = data;
    this.child = new Array(MAX_LEN);
    this.isEndingChar = false;
    this.length = 0;
    this.fail = null;
  }
}

class ACTree {
  constructor(data) {
    this.root = new ACNode('/');
  }

  insert(text) {
    let node = this.root;
    for (let char of text) {
      const index = char.charCodeAt() + 1;
      if (!node.child[index]) {
        node.child[index] = new ACNode(char);
      }
      node = node.child[index];
    }

    node.isEndingChar = true;
    node.length = text.length;
  }

  buildFailurePointer() {
    let root = this.root;
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let p = queue.shift();

      for (let i = 0; i < MAX_LEN; i++) {
        let pc = p.child[i];
        if (!pc) continue;

        if (p == root) {
          pc.fail = root;
        } else {
          let q = p.fail;
          while (q) {
            let qc = q.child[pc.data.charCodeAt() + 1];
            if (qc) {
              pc.fail = qc;
              break;
            }
            q = q.fail;
          }
          if (!q) {
            pc.fail = root;
          }
        }
        queue.push(pc);
      }
    }
  }

  match (text) {
    let root = this.root;
    let n = text.length;
    let p = root;

    for (let i = 0; i < n; i++) {
      let idx = text[i].charCodeAt() + 1;
      while (!p.child[idx] && p != root) {
        p = p.fail;
      }

      p = p.child[idx];
      if (!p) {
        p = root;
      }

      let tmp = p;
      while (tmp != root) {
        if (tmp.isEndingChar) {
          console.log(`Start from ${i - p.length + 1}, length: ${p.length}`);
        }

        tmp = tmp.fail;
      }
    }
  }
}

let automata = new ACTree();
let patterns = ['hello', 'heher', 'at', 'art', 'oars', 'soar'];
for (let pattern of patterns) {
  automata.insert(pattern);
}

automata.buildFailurePointer();
automata.match('hehello');
