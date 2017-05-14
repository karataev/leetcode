// #563 TODO. answer is wrong

let tree = {
  root: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: null,
      right: null,
    }
  },
};


var findTilt = function(root) {
  if (!root) return root;

  function getSum(node) {
    let sum = node.val;
    if (node.left) sum += getSum(node.left);
    if (node.right) sum += getSum(node.right);
    return sum;
  }

  const leftSum = root.left ? getSum(root.left) : 0;
  const rightSum = root.right ? getSum(root.right) : 0;
  return Math.abs(leftSum - rightSum);
};

const res = findTilt(tree.root);
console.log(res);