var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum

  let L = hasPathSum(root.left, targetSum - root.val)
  let R = hasPathSum(root.right, targetSum - root.val)

  return L || R
}