/*
129. 求根节点到叶节点数字之和
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。
*/


/**
 * 特例： 根节点为空 -》 0
 * 
 * 递归(node, currentNumber)
 *     当前数字 = 当前数字 * 10 + 当前节点的值
 *     这个节点的和 = 是叶子？ 直接返回 当前数字
 *                        ：左子树的和 + 右子树的和
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  
  function dfs(node, currentNumber) {
    if (!node) return 0;

    // 当前节点的值加到当前路径数字上
    currentNumber = currentNumber * 10 + node.val;

    // 如果是叶子节点，返回当前路径数字
    if (!node.left && !node.right) {
      return currentNumber;
    }

    // 返回左右子树的和
    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }
  return dfs(root, 0);// 从根节点开始，初始路径数字为0
};





// 示例输入
const root = new TreeNode(1,
  new TreeNode(0,
               new TreeNode(3),
               new TreeNode(4)),
  new TreeNode(1,
             null,
             new TreeNode(2)));

// 调用函数并输出结果
console.log(sumNumbers(root)); // 应输出 258，路径数字为 1, 10, 103, 104


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}