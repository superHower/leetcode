var flatten = function (root) {
  let list = [], prev = []

  const preorderTraversal = (root, list) => {
    if (root != null) {
      list.push(root);
      preorderTraversal(root.left, list);
      preorderTraversal(root.right, list);
    }
  }
  preorderTraversal(root, list);

  // 此时 遍历完 二叉树，拿到list数组
  for (let i = 1; i < list.length; i++) {
    prev = list[i - 1] // 把prev当成二叉树

    prev.left = null; // 再把这个二叉树，当成链表
    prev.right = list[i];
  }

  return prev
};