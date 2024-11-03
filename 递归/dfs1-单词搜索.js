const board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
const word = "ABCCED"
console.log(exist(board, word)) // 输出：true

function exist(board, word) {
  let rows = board.length, cols = board[0].length
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++) {
      if(dfs(i,j,0)) return true
    }
  }

  return false

  function dfs(i, j , index) { // 能否找到 word[index]
    if(index == word.length) return true
    if(i<0 || j>cols-1 || i>rows-1 || j<0 || word[index] !== board[i][j]) return false

    let dir = [[0,1], [0,-1], [1,0], [-1,0]]
    let record = board[i][j]
    board[i][j] = '#'

    for(let k=0; k<dir.length; k++){
        if(dfs(i+dir[k][0], j+ dir[k][1], index+1)) return true
    }

    board[i][j] = record
    return false
  }
}

function exist2(board, word) {
  let rows = board.length, cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false

  function dfs(i, j, index) {

    if(index === word.length) return true; // word遍历结束
    if(i<0 || i>rows-1 || j<0 || j>cols-1 || word[index] !== board[i][j]) // 越界 || 不匹配
      return false

    // 标记
    let record = board[i][j];
    board[i][j] = '#'; 

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右，下，左，上

    // 搜索
    for(let k = 0; k < directions.length; k++) {
      if (dfs( i + directions[k][0], j + directions[k][1], index+1))
         return true;
    }
    // 回溯
    board[i][j] = record; 
    return false;
  }
}



/**
 * 0711-20:21 直接看答案的
 */
function exist1(board, word) {
  var rows = board.length;
  var cols = board[0].length;

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

