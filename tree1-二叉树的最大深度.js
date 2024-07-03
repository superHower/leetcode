/*
104. 二叉树的最大深度
给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
*/


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 特例： 叶子无深度
 * 
 * Max(左子树最大深度, 右子树最大深度) + 
 * 
 */
function maxDepth(root) {
  if(root === null) return 0

  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1

}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15)));
// const root = new TreeNode(1, null, new TreeNode(2));
maxDepth(root);
console.log(maxDepth(root))

maxDepth(root);
console.log(maxDepth(root2))

/*
输入：root = [3,9,20,null,null,15,7]
输出：3
示例 2：

输入：root = [1,null,2]
输出：2
*/