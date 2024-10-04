// 根到叶的路径之和 是否有满足目标值
function hasPathSum(root, targetSum) {
  if (!root) return false;
  targetSum -= node.val; 
  
  if (!node.left && !node.right) // 叶子节点
    return targetSum === 0;

  return hasPathSum(node.left, targetSum) || hasPathSum(node.right, targetSum);
}


/* 跟到叶的数字之和 */
function sumNumbers (root) {
  if (!root) return 0;
  return dfs(root, 0);// 从根节点开始，初始路径数字为0

  function dfs(node, currentNumber) {
    if (!node) return 0;

    currentNumber = currentNumber * 10 + node.val; // 更新当前值

    // *是叶子，就返回当前路径数字
    if (!node.left && !node.right)  
      return currentNumber;
    
    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }
};


const root = new TreeNode(1,
  new TreeNode(0,
               new TreeNode(3),
               new TreeNode(4)),
  new TreeNode(1,
             null,
             new TreeNode(2)));
/*
输入示例           1
               0      1
             3  4   N   2

输出：319  解释：103 + 104 + 112 = 319
*/


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}
