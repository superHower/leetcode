/*
112. 路径总和
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。

判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。
*/


/**
 * 特例： 根节点为空 -》 false
 *       是叶子 -》 看看值是不是 targetSum
 * 
 * 递归： 看看左右有没有 满足 targetSum
 */


var hasPathSum = function(root, targetSum) {
  // 如果根节点为空，直接返回false
  if (!root) return false;
  
  // 如果当前节点是叶子节点，检查当前节点的值是否等于目标和
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  
  // 否则，递归地检查左右子树
  // 需要从目标和中减去当前节点的值
  return hasPathSum(root.left, targetSum - root.val) || 
         hasPathSum(root.right, targetSum - root.val);
};


// 示例输入
const root = new TreeNode(5,
                          new TreeNode(4,
                                       new TreeNode(11,
                                                   new TreeNode(7),
                                                   new TreeNode(2)),
                                       null),
                          new TreeNode(8,
                                     null,
                                     new TreeNode(13)));

// 目标和
const targetSum = 22;

// 调用函数并输出结果
console.log(hasPathSum(root, targetSum)); // 应该输出 true 或 false


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}