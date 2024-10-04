const intervals = [[1,3],[2,6],[8,10],[9,18]] //输出：[[1,6],[8,10],[15,18]]
console.log(merge(intervals))

function merge(intervals) {
  intervals.sort((interval, q) => interval[0] - q[0]); // 按照左端点从小到大排序
  const ans = [];

  for (const interval of intervals) {
      const len = ans.length;
      if (len && interval[0] <= ans[len - 1][1]) { // 可以合并
          ans[len - 1][1] = Math.max(ans[len - 1][1], interval[1]); // 更新右端点最大值
      } else { // 不相交, 直接放进去
          ans.push(interval);
      }
  }
  return ans;
};