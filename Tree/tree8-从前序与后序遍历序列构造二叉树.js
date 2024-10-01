var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  // 先确定根节点
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) break;
  }

  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

  return root;
};
const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))