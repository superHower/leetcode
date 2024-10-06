// 完全二叉树的节点个数
function countNodes(root) {
  if (!root) return 0;
  let L = countNodes(root.left)
  let R = countNodes(root.right)
  return L + R + 1; // 1 表示当前这个节点，算一个节点数
}


// 最大路径和
function maxPathSum (root) {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和
  dfs(root); // 递归的入口
  return maxSum;

  function dfs (root) {
    if (!root) return 0;
    let L = dfs(root.left);
    let R = dfs(root.right);

    maxSum = Math.max(maxSum, L + R + root.val); // 更新最大纪录
    const outputMaxSum = root.val + Math.max(0, L, R); // 这个节点的最大路径，要在左和右中选一个
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }
}
