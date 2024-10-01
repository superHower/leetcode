/*
52. N 皇后 II
n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
*/

/**
 * 0710-23:32
 * 大佬的代码
 */
var totalNQueens_1 = function(n) {
  let res = 0;
  // 垂直方向的占用情况
  var vertical = {};
  // 水平方向的占用情况
  var horitonal = {};
  // 右倾斜对角线的占用情况
  var diagonalRight = {};
  // 左倾斜对角线的占用情况
  var diagonalLeft = {};

  putQueen(n,0)
  return res

  /**
   * 尝试在n皇后的问题中，摆放第index行的皇后的位置
   */
  function putQueen(n,index){
      if(n == index) {
          res++
      }
      for(var i=0;i<n;i++) {
          if(!vertical[i] && !horitonal[index] && !diagonalRight[i+index] && !diagonalLeft[i-index]){
              vertical[i] = true;
              horitonal[index] = true;
              diagonalRight[i+index] = true;
              diagonalLeft[i-index] = true;

              putQueen(n,index+1);
              
              vertical[i] = false;
              horitonal[index] = false;
              diagonalRight[i+index] = false;
              diagonalLeft[i-index] = false;
          }
      }
  }

};




/**
 * 0710-23:30
 * 这个是KIMI生成的， 看着逻辑挺对，
 */
var totalNQueens = function(n) {
  var res = 0;
  var board = Array.from({ length: n }, () => Array(n).fill('.'));

  var backtrack = function(board, row) {
      if (row === board.length) {
          // res.push(JSON.parse(JSON.stringify(board))); // deep copy
          res++;
          return;
      }

      var n = board[row].length;
      for (var col = 0; col < n; col++) {
          if (!isValid(board, row, col)) {
              continue;
          }
          board[row][col] = 'Q';
          backtrack(board, row + 1);
          board[row][col] = '.';
      }
  };

  var isValid = function(board, row, col) {
      var n = board.length;
      // 检查列是否有皇后互相冲突
      for (var i = 0; i < n; i++) {
          if (board[i][col] === 'Q') {
              return false;
          }
      }
      // 检查右上方是否有皇后互相冲突
      for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
          if (board[i][j] === 'Q') {
              return false;
          }
      }
      // 检查左上方是否有皇后互相冲突
      for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
          if (board[i][j] === 'Q') {
              return false;
          }
      }
      return true;
  };

  backtrack(board, 0);
  return res;
};

const n = 4
// 输出：2

console.log(totalNQueens(n))