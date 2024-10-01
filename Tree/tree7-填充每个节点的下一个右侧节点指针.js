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