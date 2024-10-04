// 填充每个节点的下一个右侧节点指针

function connect(root) {
  const pre = [];
  dfs(root, 0); // 根节点的深度为 0
  return root;

  function dfs(node, depth) {
      if (node === null) return;

      if (depth === pre.length) { // node 是这一层最左边的节点
          pre.push(node);
      } else { // pre[depth] 是 node 左边的节点
          pre[depth] = node;
          pre[depth].next = node; // node 左边的节点指向 node
      }

      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
  }
};