// #104

class Tree {
  constructor() {
    this.root = null;
  }

  traverse(callback) {
    function walk(node) {
      callback(node);
      node.children.forEach(walk);
    }

    walk(this.root);
  }

  add(value, parentValue) {
    let newNode = {value, children: []};

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    })
  }

}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  contains(value) {
    let current = this.root;

    while(current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }

    return false;
  }

  add(value) {
    let node = {
      value: value,
      left: null,
      right: null,
    };

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        break;
      }
    }
  }

  getMaxDepth() {
    if (!this.root) return 0;

    let depths = [];
    let depth = 0;
    function visit(node) {
      // console.log('visit', node.value);
      depth++;
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      if (!node.left && !node.right) depths.push(depth);
      depth--;
    }

    visit(this.root);

    return Math.max(...depths);
  }
}

/*
let tree = new Tree();
tree.add(10);
tree.add(15, 10);
tree.add(25, 15);
tree.traverse(node => node.value += 1);
tree.add(999, 16);
*/

/*
let tree = new BinarySearchTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(8);
tree.add(2);
tree.add(1);
console.log(tree.getMaxDepth());
*/


// console.log(JSON.stringify(tree, null, 2));

var maxDepth = function(root) {
  if (!root) return 0;
  let depths = [];
  let depth = 0;

  function visit(node) {
    depth++;
    if (node.left) visit(node.left);
    if (node.right) visit(node.right);
    if (!node.left && !node.right) depths.push(depth);
    depth--;
  }

  visit(root);

  return Math.max(...depths);
};

console.log(maxDepth([]));