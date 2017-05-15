// #404

var sumOfLeftLeaves = function(root) {
  function visit(node, isLeft) {
    let sum = 0;
    if (node.left) sum += visit(node.left, true);
    if (node.right) sum += visit(node.right, false);
    if (!node.left && !node.right && isLeft) sum += node.val;
    return sum;
  }

  return visit(root.left, true) + visit(root.right, false);
};

const tree = {
  root: {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      }
    }
  }
};

const res = sumOfLeftLeaves(tree.root);
console.log(res);