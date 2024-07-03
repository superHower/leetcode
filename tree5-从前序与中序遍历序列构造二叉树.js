/*
105. 从前序与中序遍历序列构造二叉树

给定两个整数数组 preorder 和 inorder ，
其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，
请构造二叉树并返回其根节点。
*/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  
  // 先确定根节点
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  
  let i = 0;
  for (; i < inorder.length; i++) {
    if (inorder[i] === rootVal) break;
  }
  
  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  
  return root;

};

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder))

/*
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]


输入: preorder = [-1], inorder = [-1]
输出: [-1]
*/