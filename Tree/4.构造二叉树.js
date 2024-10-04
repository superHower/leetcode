const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))

/*
  preorder[0]
  前序与中序，遍历序列，构造二叉树
*/
function buildTree(preorder, inorder) {
  const n = preorder.length;
  if (preorder.length === 0)  return null;  // 空节点
  
  const leftSize = inorder.indexOf(preorder[0]); // 左子树的大小
  const inLeft = inorder.slice(0, leftSize);
  const inRight = inorder.slice(leftSize+1, n);

  const preLeft = preorder.slice(1, leftSize+1 );
  const preRight = preorder.slice(leftSize+1) ;

  const left = buildTree(preLeft, inLeft);
  const right = buildTree(preRight, inRight);
  return new TreeNode(preorder[0], left, right);

};

/*
  preorder[n - 1]
  中序与后序，遍历序列，构造二叉树
*/
function buildTree(inorder, postorder) {
  const n = postorder.length;
  if (n === 0)   return null;// 空节点
  
  const leftSize = inorder.indexOf(postorder[n - 1]); // 左子树的大小
  const inLeft = inorder.slice(0, leftSize);
  const inRight = inorder.slice(leftSize + 1, n);

  const postLeft = postorder.slice(0, leftSize);
  const postRight = postorder.slice(leftSize, n - 1);

  const left = buildTree(inLeft, postLeft);
  const right = buildTree(inRight, postRight);
  return new TreeNode(postorder[n - 1], left, right);
};

