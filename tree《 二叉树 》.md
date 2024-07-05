## 前序遍历： 自上而下，自左往右
```js
function preorderTraversal(root, visit) {
  if (root) {
    visit(root); // 访问根节点
    preorderTraversal(root.left, visit); // 递归遍历左子树
    preorderTraversal(root.right, visit); // 递归遍历右子树
  }
}

// 使用方法
const visit = (node) => console.log(node.val);
preorderTraversal(root, visit);
```

## 中序遍历： 自 左下 往 右上 

```js
function inorderTraversal(root, visit) {
  if (root) {
    inorderTraversal(root.left, visit); // 递归遍历左子树
    visit(root); // 访问根节点
    inorderTraversal(root.right, visit); // 递归遍历右子树
  }
}

// 使用方法
inorderTraversal(root, visit);

```
## 后序遍历： 自下而上，自左往右
```js
function postorderTraversal(root, visit) {
  if (root) {
    postorderTraversal(root.left, visit); // 递归遍历左子树
    postorderTraversal(root.right, visit); // 递归遍历右子树
    visit(root); // 访问根节点
  }
}

// 使用方法
postorderTraversal(root, visit);
```