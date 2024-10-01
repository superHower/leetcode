var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  // 先确定根节点
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) break;
  }

  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));

  return root;
}
const inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
console.log(buildTree(inorder, postorder))