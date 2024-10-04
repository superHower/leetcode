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
    const outputMaxSum = root.val + Math.max(0, L, R); // 当前子树对外提供的最大和
    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }
}
