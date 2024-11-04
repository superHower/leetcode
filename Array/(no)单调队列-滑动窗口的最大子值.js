function maxSlidingWindow(nums, k) {
  const ans = [];
  const q = [];
  for (let i = 0; i < nums.length; i++) {
      // 1. 入
      while (q.length && nums[q[q.length - 1]] <= nums[i]) {
          q.pop(); // 维护 q 的单调性
      }
      q.push(i); // 入队
      // 2. 出
      if (i - q[0] >= k) { // 队首已经离开窗口了
          q.shift(); // 力扣没有 Deque，不过这样写也挺快的
      }
      // 3. 记录答案
      if (i >= k - 1) {
          // 由于队首到队尾单调递减，所以窗口最大值就是队首
          ans.push(nums[q[0]]);
      }
  }
  return ans;
};
