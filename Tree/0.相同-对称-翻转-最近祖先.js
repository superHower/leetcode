// 相同二叉树
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 对称二叉树
var isSymmetric = function (root) {
  function isMirror(p, q) {// 辅助函数，用于比较两个子树是否镜像对称
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    // 递归地检查左子树与右子树是否镜像对称
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  }

  if (root === null) return true;
  return isMirror(root.left, root.right);// 使用辅助函数检查是否对称
};

// 翻转二叉树
var invertTree = function (root) {
  if (!root) return null;
  // 递归地翻转左子树和右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  // 翻转当前节点的左右子树
  root.left = right;
  root.right = left;

  return root;
};


// 二叉树的最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;

  const L = lowestCommonAncestor(root.left, p, q);
  const R = lowestCommonAncestor(root.right, p, q);

  if (L && R) return root;
  return L ?? R;
};