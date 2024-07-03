
/*

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

初始状态下，所有 next 指针都被设置为 NULL 。
*/


/**
 * 解法一： 深度搜索: 看着输出的结果，陷入了沉思, 呜呜呜
 */
var connect = function (root) {
  const pre = [];
  function dfs(node, depth) {
      if (node === null) return;
      if (depth === pre.length) { // node 是这一层最左边的节点
          pre.push(node);
          console.log(pre)
      } else { // pre[depth] 是 node 左边的节点
          pre[depth].next = node; // node 左边的节点指向 node
          pre[depth] = node;
          console.log(pre)
      }
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
  }
  dfs(root, 0); // 根节点的深度为 0
  return root;
};

const root = new TreeNode(1, 
                          new TreeNode(2, 
                                       new TreeNode(4), 
                                       new TreeNode(5)), 
                          new TreeNode(3, 
                                       null, 
                                       new TreeNode(7)))
console.log(connect(root))

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}