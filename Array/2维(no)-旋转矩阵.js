const matrix = [[1,2,3],[4,5,6],[7,8,9]] // 输出：[[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate(matrix))
// 方法一：使用辅助数组
function rotate(matrix) {
  const n = matrix.length;
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          matrix_new[j][n - i - 1] = matrix[i][j];
      }
  }
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          matrix[i][j] = matrix_new[i][j];
      }
  }
};

// 原地旋转
function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
      for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[n - j - 1][i];
          matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
          matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
          matrix[j][n - i - 1] = temp;
      }
  }
};

