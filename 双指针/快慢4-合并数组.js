


// 示例
const arr1 = [1, 3, 5], arr2 = [2, 4, 6];
console.log(mergeSortedArraysUsingMergeSort(arr1, arr2));//[ 1, 2, 3, 4, 5, 6 ]


function mergeSortedArraysUsingMergeSort(arr1, arr2) {
  let result = [], L = 0, R = 0;
  
  while (L < arr1.length && R < arr2.length) {
      if (arr1[L] < arr2[R]) {
         result.push(arr1[L]); L++;
      } else {
          result.push(arr2[R]); R++;
      }
  }
  // 可能左或者右， 没有指完，继续接着指
  while (L < arr1.length) { result.push(arr1[L]); L++; }
  while (R < arr2.length) { result.push(arr2[R]); R++; }
  
  return result;
}

