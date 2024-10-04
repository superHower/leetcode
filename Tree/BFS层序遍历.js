// 层序遍历, BFS, 返回每一层的结果
function levelOrder(root) {
  const res = [], level = [];
  if (!root) return res;
  level.push(root);

  while (level.length !== 0) { // 一层一层的找
    res.push([]);

    for (let i = 1; i <= level.length; ++i) {
      const node = level.shift(); // 当前level的第一个，拿出

      res[res.length - 1].push(node.val); // res的最后一个，放入

      // 处理下一层啦
      if (node.left) level.push(node.left);
      if (node.right) level.push(node.right);
    }
  }

  return res;
};


// 先序遍历：根-->左-->右
function dfs(root) {
  if (root) {
    console.log(root.val);
    dfs(root.left);
    dfs(root.right);
  }
}