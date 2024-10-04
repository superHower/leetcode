// 最大深度
function maxDepth(root) {
  if (!root) return 0
  let L = maxDepth(root.left)
  let R = maxDepth(root.right)

  return Math.max(L, R) + 1
}

// 最大直径
function diameterOfBinaryTree(root) {
  let ans = 1;
  dfs(root);
  return ans - 1;
  
  function dfs (root) {
    if (!root) return 0;
    let L = dfs(root.left);
    let R = dfs(root.right);
  
    ans = Math.max(ans, L + R + 1); // 更新最大直径
    return Math.max(L, R) + 1;
  }
};