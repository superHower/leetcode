var diameterOfBinaryTree = function (root) {
  let ans = 1;
  const depth = (rootNode) => {
    if (!rootNode) return 0;
    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    ans = Math.max(ans, L + R + 1);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return ans - 1;
};