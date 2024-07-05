/*
124. 二叉树中的最大路径和
二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。
同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。
*/

const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

  const dfs = (root) => {
      if (root == null) return 0;
      
      const left = dfs(root.left);   // 左子树提供的最大路径和
      const right = dfs(root.right); // 右子树提供的最大路径和

      const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
      maxSum = Math.max(maxSum, innerMaxSum);      // 挑战最大纪录

      const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

      // 如果对外提供的路径和为负，直接返回0。否则正常返回
      return outputMaxSum < 0 ? 0 : outputMaxSum;
  };

  dfs(root);  // 递归的入口

  return maxSum; 
};



const root = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
)
console.log(maxPathSum(root))

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}


