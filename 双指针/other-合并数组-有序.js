
// 【合并有序数组】

const arr1 = [1, 3, 5], arr2 = [2, 12, 4, 6]; //[ 1, 2, 3, 4, 5, 6 ]
/**
 * while(没指到头) -> 谁小谁进res,并右移  -> 最后结束肯定有个剩下的，把他全部放进res
 */
function mergeSortedArraysUsingMergeSort(arr1, arr2) {
  let result = [], p1 = 0, p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) { result.push(arr1[p1]); p1++; }
    else { result.push(arr2[p2]); p2++; }
  }
  // 可能左或者右， 没有指完，继续接着指
  while (p1 < arr1.length) { result.push(arr1[p1]); p1++; }
  while (p2 < arr2.length) { result.push(arr2[p2]); p2++; }

  return result;
}

