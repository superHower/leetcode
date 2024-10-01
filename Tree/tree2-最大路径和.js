const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和
  const dfs = (root) => {
    if (root == null) return 0;
    const L = dfs(root.left);
    const R = dfs(root.right);

    maxSum = Math.max(maxSum, L + R + root.val);  // 更新最大纪录
    const outputMaxSum = root.val + Math.max(0, L, R); // 当前子树对外提供的最大和
    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };
  dfs(root);  // 递归的入口
  return maxSum;
};