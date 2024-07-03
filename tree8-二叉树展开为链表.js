/*
114. 二叉树展开为链表

给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同

*/

/**
 * 0703-20:02 先序遍历，得到一个结果的list
 */

var flatten = function(root) {
  const list = [];
  preorderTraversal(root, list);
  console.log(list)
  const size = list.length;

  for (let i = 1; i < size; i++) {
    let prev = list[i - 1], curr = list[i];
    prev.left = null;
    prev.right = curr;

  }
  return prev
};

const preorderTraversal = (root, list) => {
  if (root != null) {
      list.push(root);
      preorderTraversal(root.left, list);
      preorderTraversal(root.right, list);
  }
}


const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3),
    new TreeNode(4)
  ),
  new TreeNode(5,
    null,
    new TreeNode(6)
  ),
)
console.log(flatten(root))

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}