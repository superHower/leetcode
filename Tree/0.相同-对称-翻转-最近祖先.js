// 相同二叉树
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 对称二叉树
var isSymmetric = function (root) {
  if (root === null) return true;
  return isMirror(root.left, root.right);

  function isMirror(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
  
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  }


};

// 翻转二叉树
var invertTree = function (root) {
  if (!root) return null;

  root.left = invertTree(root.right);
  root.right = invertTree(root.left);;

  return root;
};


// 最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  const LAncestor = lowestCommonAncestor(root.left, p, q);
  const RAncestor = lowestCommonAncestor(root.right, p, q);

  if (LAncestor && RAncestor) return root;
  return LAncestor || RAncestor;
};