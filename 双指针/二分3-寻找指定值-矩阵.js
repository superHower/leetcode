let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]// 每行从左到右升序; 每列从上到下升序。
let target = 3
console.log(searchMatrix(matrix, target))

// 二分法O(logn)
function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low
    const midVal = matrix[Math.floor(mid / n)][mid % n]

    if (midVal < target) low = mid + 1;
    else if (midVal > target) high = mid - 1;
    else return true;

  }
  return false;
};

// O(m + n)
function searchMatrix(matrix, target) {
  const rows = matrix.length , cols = matrix[0].length
  let i = 0, j = cols - 1
  // 左下角开始， 往右上角找
  while (i < rows && j >= 0) {
    if (matrix[i][j] === target) return true
    else if (matrix[i][j] > target)  j--
    else  i++
  }
  return false
};