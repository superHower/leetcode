const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix))//输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * 每次移动：就放进这个值，标记成已访问
 * 模拟移动：如果越界 or 已访问 --> 掉头：d=(d+1)%4
 * 真正移动
 * 
 */

function spiralOrder(matrix) {
  let rows = matrix.length, cols = matrix[0].length
  const ans = new Array(rows * cols);
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上
  let i = 0, j = 0, d = 0;

  for (let k = 0; k < rows * cols; k++) { // 一共走 rows*cols 步
    ans[k] = matrix[i][j];
    matrix[i][j] = '#'; // 标记: 已访问
    // 模拟移动
    const x = i + dirs[d][0];
    const y = j + dirs[d][1];
    // 是否要掉头？ 出界 or 已访问 --> 右转 90°
    if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] === '#')  d = (d + 1) % 4;
    // 真正移动
    i += dirs[d][0];
    j += dirs[d][1]; // 走一步
  }
  return ans;


};