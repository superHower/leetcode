

/* 根到叶 - 数字之和 */
function sumNumbers (root) {
  if (!root) return 0;
  return dfs(root, 0);// 从根节点开始，初始路径数字为0

  function dfs(node, currentNumber) {
    if (!node) return 0;

    currentNumber = currentNumber * 10 + node.val; // 更新当前值

    // *是叶子，就返回当前路径数字
    if (!node.left && !node.right)  
      return currentNumber;
    
    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }
};

/* 根到叶 - 路径之和 满足目标值 */
function hasPathSum(root, targetSum) {
  if (!root) return false;
  return dfs(root, 0)

  function dfs(root, curSum) {
    if(!root) return false
    curSum +=root.val
    if(!root.left && !root.right)
      return curSum == targetSum
    return dfs(root.left, curSum) || dfs(root.right, curSum)
  }
}


/* 路径之和 - 满足目标值 的路径条数 */

// 前缀和
var pathSum = function(root, targetSum) {
  const map = new Map(); // 存储：从根到当前节点 累积和为 x 的路径 出现的次数
  map.set(0, 1);         // 表示 累计和为0 的路径 出现的次数是一次
  return dfs(root, map, 0);

  function dfs (root, map, curSum) {
    if (root == null) return 0;
  
    let res = 0;
    curSum += root.val; // 到当前节点 的 前缀和

    if(map.has(curSum - targetSum)) // map中存在 某位置 到i的 区间和为target
      res = map.get(curSum - targetSum) 
    else res = 0

    map.set(curSum, (map.get(curSum) || 0) + 1)

    res += dfs(root.left, map, curSum);
    res += dfs(root.right, map, curSum);

    map.set(curSum, (map.get(curSum) || 0) - 1); 
  
    return res;
  }
}









const root = new TreeNode(1,
  new TreeNode(0,
               new TreeNode(3),
               new TreeNode(4)),
  new TreeNode(1,
             null,
             new TreeNode(2)));
/*
输入示例           1
               0      1
             3  4   N   2

输出：319  解释：103 + 104 + 112 = 319
*/


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}
