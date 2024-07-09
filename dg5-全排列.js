/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

*/

var permute = function(nums) {
  const res = [], path = [];
  backtracking(nums, nums.length, []);
  return res;
  
  function backtracking(n, k, used) {
      if(path.length === k) {
          res.push(Array.from(path));
          return;
      }
      for (let i = 0; i < k; i++ ) {
          if(used[i]) continue;
          path.push(n[i]);
          used[i] = true; // 同支
          backtracking(n, k, used);
          path.pop();
          used[i] = false;
      }
  }
};


const nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

console.log(permute(nums))