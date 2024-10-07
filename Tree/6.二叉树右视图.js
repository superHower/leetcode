// 二叉树右视图
var rightSideView = function(root) {
  const ans = [];
  dfs(root, 0);
  return ans;

  function dfs(node, depth) {
    if (!node) return
    if (depth === ans.length) ans.push(node.val);
    
    dfs(node.right, depth + 1); // 先递归右子树，保证首次遇到的一定是最右边的节点
    dfs(node.left, depth + 1);
  }
};
