/*
79. 单词搜索
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
*/


/**
 * 我现在尝试自己写出来
 */
var exist = function(board, word) {
  let rows = board.length;
  let cols = board[0].length;

  function dfs(i, j, index) {

    if(index === word.length) return true; // 如果索引超出单词长度，说明找到了单词
    if(i<0 || i>rows-1 || j<0 || j>cols-1 || word[index]==board[i][j]) // 超出边界 || 当前字符不匹配当前位置
     return false;

    let temp = board[i][j];
    board[i][j] = '#'; // 标记当前单元格已访问

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右，下，左，上

    // 上下左右搜索
    for(let k = 0; k < directions.length; k++) {
      let newi = i + directions[k][0];
      let newj = j + directions[k][1];
      if (dfs(newi, newj, index+1)) return true;
    }

    // 递归结束
    board[i][j] = temp; // 恢复当前单元格，回溯
    return false;


  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false


}






























/**
 * 0711-20:21 直接看答案的
 */
var exist = function(board, word) {
  var rows = board.length;
  var cols = board[0].length;

  /**
   * 
   * @param {*} x board的位置x
   * @param {*} y board的位置y
   * @param {*} index word的索引
   * @returns 
   */
  function dfs(x, y, index) {
      // 如果索引超出单词长度，说明找到了单词
      if (index === word.length) return true;

      // 如果行或列越界，或者当前字符不匹配，返回false
      if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] !== word[index]) {
          return false;
      }

      // 标记当前单元格已访问
      var temp = board[x][y];
      board[x][y] = '#';

      // 向四个方向搜索
      var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右，下，左，上
      for (var i = 0; i < directions.length; i++) {
          if (dfs(x + directions[i][0], y + directions[i][1], index + 1)) {
              return true;
          }
      }

      // 恢复当前单元格，回溯
      board[x][y] = temp;
      return false;
  }

  // 从每个单元格开始搜索
  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
          if (dfs(i, j, 0)) {
              return true;
          }
      }
  }

  // 如果没有找到单词，返回false
  return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
console.log(exist(board, word))