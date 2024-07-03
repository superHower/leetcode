/*
226. 翻转二叉树

给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
*/


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 总结点空 -> 空
 * 左子树 -> 翻转后的右子树
 * 右子树 -> 翻转后的左子树
 */
var invertTree = function(root) {
  if (!root) return null;
  // 递归地翻转左子树和右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // 翻转当前节点的左右子树
  root.left = right;
  root.right = left;
  return root;
  

};

const root = new TreeNode(4, 
                          new TreeNode(2, 
                                       new TreeNode(1), 
                                       new TreeNode(3)), 
                          new TreeNode(7, 
                                       new TreeNode(6), 
                                       new TreeNode(9)))
console.log(invertTree(root))

/*
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]


输入：root = [2,1,3]
输出：[2,3,1]

输入：root = []
输出：[]

*/