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
    prev = list[i - 1]

    prev.left = null;
    prev.right = list[i];
  }

  for(let item of list) {
    
  }
  return prev
};