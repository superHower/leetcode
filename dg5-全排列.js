/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

*/
var permute = function(nums) {
  const res = [] // 存储 总结果
  const path = [] // 存储 数字
  const len = nums.length;
  backtracking(nums, []);
  return res;
  
  function backtracking(nums, used) {
      if(path.length === len) { // path的长度 到头 就可以放进去了 --> 结束递归
        res.push([...path]);
        return;
      }
      for (const num of nums) { // 遍历nums
        if (used[num]) continue; // 判断这个数字有没有用过

        path.push(num); // 放入数字
        used[num] = true; // 这个数字用过了

        backtracking(nums, used.slice()); // 向下递归，并复制used数组

        // 回溯结束
        path.pop();
        used[num] = false; // 重置used数组中当前数字的状态
    }
  }
};


const nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

console.log(permute(nums))