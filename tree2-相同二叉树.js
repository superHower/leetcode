/*

100. 相同的树
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
*/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * 特例： 俩都是叶子  ->  相同
 *       仅有一个叶子 -> 不相同
 *       叶子的值不相同 -> 不相同
 * 
 * 比较： 左边相同 && 优先相同
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) {
        return true;
    }
    if(p === null || q === null) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q))

/*
输入：p = [1,2,3], q = [1,2,3]
输出：true

输入：p = [1,2], q = [1,null,2]
输出：false

输入：p = [1,2,1], q = [1,1,2]
输出：false
*/