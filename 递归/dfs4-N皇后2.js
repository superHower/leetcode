const n = 4
console.log(totalNQueens(n))// 输出：2


/**
 *  某行哪个位置能否放置皇后？ { 列、左上、右上 }都没有 Q ，就可以放
 *  逐行: 验证每个位置是否有效？放置 Q
 */

function totalNQueens3(n) {
  const board = new Array(n).fill('.').map(() => new Array(n).fill('.'))

  let res = 0, rows = board.length, cols = board[0].length
  dfs(board, 0)
  return res


  function dfs(board, row) { // 目标： 验证每个位置是否有效？放置 Q
    if (row === board.length) {
      res++
      return
    }

    for (let col = 0; col < board[row].length; col++) {
      if (!isValid(board, row, col)) continue
      board[row][col] = 'Q'
      dfs(board, row + 1)
      board[row][col] = '.'
    }

  }

  function isValid(board, row, col) {
    // 遍历行， 以检查列
    for (let i = 0; i < rows; i++) {
      if (board[i][col] == 'Q') return false
    }
    // 检查右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < cols; i--, j++) {
      if (board[i][j] == 'Q') return false
    }
    // 检查左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') return false
    }
    return true
  }

}



/**
 * 0710-23:32
 * 大佬的代码
 */
function totalNQueens2(n) {
  let res = 0;
  var vertical = {}, horitonal = {}, xieRight = {}, xieLeft = {};

  putQueen(0)
  return res

  /**
   * 尝试在n皇后的问题中，摆放第index行的皇后的位置
   */
  function putQueen(index) {
    if (index == n) {
      res++
    }
    for (var i = 0; i < n; i++) {
      if (!vertical[i] && !horitonal[index] && !xieRight[i + index] && !xieLeft[i - index]) {
        vertical[i] = true;
        horitonal[index] = true;
        xieRight[i + index] = true;
        xieLeft[i - index] = true;

        putQueen(index + 1);

        vertical[i] = false;
        horitonal[index] = false;
        xieRight[i + index] = false;
        xieLeft[i - index] = false;
      }
    }
  }

};




/**
 * 0710-23:30
 * 这个是KIMI生成的， 看着逻辑挺对，
 */
function totalNQueens1(n) {
  var res = 0;
  const board = new Array(n).fill('.').map(() => new Array(n).fill('.'))
  dfs(board, 0);
  return res;

  function dfs(board, row) { // 目标： 标记 'Q'皇后
    if (row === board.length) {
      res++;
      return;
    }

    for (var col = 0; col < board[row].length; col++) {
      if (!isValid(board, row, col)) continue;

      board[row][col] = 'Q' // 标记
      dfs(board, row + 1);
      board[row][col] = '.'; // 恢复
    }
  };

  function isValid(board, row, col) {
    var n = board.length;
    // 检查列
    for (var i = 0; i < n; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // 检查右上方
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    // 检查左上方
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  };


};

