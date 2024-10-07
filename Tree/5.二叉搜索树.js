// 有序数组 转 平衡二叉搜索树

/*
  由于是有序数组，贸然转成二叉树，就会变成直直的链表
  所以，用二分法给他转成平衡二叉搜索树
*/
var sortedArrayToBST = function(nums) {
  return dfs(0, nums.length)

  function dfs(left, right) {
    if (left === right) return null;
    
    const mid = Math.floor((left + right) / 2);
    let LTree = dfs(left, mid)
    let RTree = dfs(mid + 1, right)

    return new TreeNode(nums[mid], LTree, RTree);
  }
};

// 验证二叉搜索树
/* 保证： 左 < 中 < 右  */
var isValidBST = function(root) {
    return dfs(root, -Infinity, Infinity);

    function dfs (root, lower, upper)  {
      if (root === null)  return true;
      if (root.val <= lower || root.val >= upper) return false;
      
      return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  }
};

// 二叉搜索树第K小

// 中序遍历
var kthSmallest = function(root, k) {
  let ans;
  inOrderTraverse(root);
  return ans;

  function inOrderTraverse (node) {
    if(!node) return 
    if(k>0) {
      inOrderTraverse(node.left)

      k--; if(k==0) ans = node.val // if(--k == 0) ans = node.val

      inOrderTraverse(node.right)
    }
  }
};









function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
