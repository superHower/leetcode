/*
106. 从中序与后序遍历序列构造二叉树

给定两个整数数组 inorder 和 postorder ，
其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，
请你构造并返回这颗 二叉树 。
*/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  
  // 先确定根节点
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  
  let i = 0;
  for (; i < inorder.length; i++) {
    if (inorder[i] === rootVal) break;
  }
  
  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));
  
  return root;

}
const inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
console.log(buildTree(inorder, postorder))

/*
输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
示例 2:

输入：inorder = [-1], postorder = [-1]
输出：[-1]
*/