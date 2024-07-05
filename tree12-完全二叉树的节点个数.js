/*
222. 完全二叉树的节点个数

给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：
      在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
      并且最下面一层的节点都集中在该层最左边的若干位置。
      若最底层为第 h 层，则该层包含 1~ 2h 个节点。

*/





var countNodes = function(root) {
  if (!root) return 0;

  console.log(root.val + " ")
  const left = countNodes(root.left);
  const right = countNodes(root.right);

  return 1 + left + right;
}


const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3,
    new TreeNode(6),
    null
  )
)
console.log(countNodes(root))






function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}