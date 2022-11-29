const makeATree = (arr) => {
  const node = { val: arr[0], left: null, right: null };
  const totalLevels = Math.pow(arr.length + 5, 1 / 2);
  const helper = (node, lastIndex, currentLevel) => {
    currentLevel++;
    if (arr[2 * lastIndex + 1] !== undefined && arr[2 * lastIndex + 2] !== null) {
      if (currentLevel < totalLevels) {
        node.left = { val: arr[2 * lastIndex + 1], left: null, right: null };
        helper(node.left, 2 * lastIndex + 1, currentLevel);
        node.right = { val: arr[2 * lastIndex + 2], left: null, right: null };
        helper(node.right, 2 * lastIndex + 2, currentLevel);
      };
    };
  };
  helper(node, 0, 0);
  return node;
};

export default makeATree;
// makeATree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
// console.log(JSON.stringify(makeATree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), '', 2));
