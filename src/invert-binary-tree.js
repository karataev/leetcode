// #226

let tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: null,
      right: null,
    }
  },
};

var invertTree = function(root) {
  if (!root) return root;

  function swap(node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) swap(node.left);
    if (node.right) swap(node.right);
  }

  swap(root);

  return root;
};

const res = invertTree(tree.root);
console.log(JSON.stringify(res, null, 2));
