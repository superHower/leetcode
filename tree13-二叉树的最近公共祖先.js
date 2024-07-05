/*
236. 二叉树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

*/

/**
 * 分类讨论： 当前是空 || 当前是p || 当前是 q --> 返回当前节点
 *           左右子树都能找到祖先  --》 返回当前节点
 *           只有左子树能找到 --》 左子树结果
 *           只有右子树能找到 --》 右子树结果
 *           左右都没找到    --》  返回空
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) 
      return root;
    
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
      return root;
  }
  return left ?? right;
};



const root = new TreeNode(3,
  new TreeNode(5,
    new TreeNode(6,
      null,
      null
    ),
    new TreeNode(2,
      new TreeNode(7),
      new TreeNode(4)
    )
  ),
  new TreeNode(1,
    new TreeNode(0,
      null,
      null
    ),
    new TreeNode(8,
      null,
      null
    )
  )
)
const p = 5, q = 1

console.log(lowestCommonAncestor(root, p, q))



function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}