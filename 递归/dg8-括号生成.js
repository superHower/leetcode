/*
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
*/
var generateParenthesis = function(n) {
  const res = [];
  backtrack(0, 0, "");
  return res;

  function backtrack(left, right, path) {
    if (path.length == n * 2) {
      res.push(path);
      return;
    }
    /*
     * 优先考虑 左括号
     */
    // 当左括号的数量小于n时，可以添加左括号
    if (left < n) {
      backtrack(left + 1, right, path + "(");
    }
    // 当右括号的数量小于左括号的数量时，可以添加右括号
    if (right < left) {
      backtrack(left, right + 1, path + ")");
    }
  }
};

/**
 * 0710-23:23 
 * 递归的模板用的挺熟的， 笑死了
 * 完全不知道 backtrack 里面到底放那些变量
 * 
 * 参数 a 没有正确地反映当前的左括号和右括号的数量，以及它没有考虑到右括号的添加
 * 
 */

var generateParenthesis_1 = function(n) {
  const res = [], path = []

  backtrack(0)
  return res

  function backtrack(a) {
    if(path.length == n*2) {
      res.push(path.join(""))
      return 
    }

    for(let i = 0; i < n; i++) {
      path.push('(')
      backtrack(i+1)
      path.pop()
    }
  }

};

const n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParenthesis(n))