/**
 * 1. 合并区间
 * 2. 股票（某天买入，未来才卖出）
 * 3. 跳跃游戏
 * 4. 最长公共前缀
 */

// 【合并区间】
const intervals = [[1,3],[2,6],[8,10],[9,18]] //输出：[[1,6],[8,10],[15,18]]
/**
 * 排序 -> fof : 【cur右端点 < end右端点】 ？ 更新最大end右端点  ： cur入ans
 */
function merge(intervals) {
  intervals.sort((cur, q) => cur[0] - q[0]); // 按照左端点从小到大排序
  const ans = [];
 
  for (const cur of intervals) {
      let end = ans[ans.length-1] // 答案的最后一个
      if (ans.length && cur[0] <= end[1]) end[1] = Math.max(end[1], cur[1]); // 更新 右端点
      else                                ans.push(cur);// 不相交, 直接放进去
    console.log(ans)
  }
  return ans;
};

//【股票（某天买入，未来才卖出）】
const prices = [7,1,5,3,6,4] // // 5 ： 最大利润是 5
/**
 * 利润 = price[i] - minPrice
 * for(price[i])  【今天 低于 最低价】 ？ 最低价=今天  ： 更新最大利润
 */
function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let minPrice = prices[0], max = 0

  for(let i = 0; i< prices.length; i++) {
    if(prices[i] < minPrice)   minPrice = prices[i]
    else                       max = Math.max(max, prices[i] - minPrice)
  }
  return max
}

// 【跳跃游戏】
const nums = [2,3,1,1,4] // true 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// const nums = [3,2,1,0,4] // false
/**
 * nums[i]表示跳的最远距离
 * 
 */
console.log(canJump (nums))
function canJump (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i > max) return false;
      max = Math.max(max, i + nums[i]);// 当前位置的最大跳跃距离
  }
  return true;
};

// 【最长公共前缀】
const testStrs = ["flower", "flow", "flight"]; // 输出: "fl"
/**
 * 排序  ->  fof(s: strs)  for(s[i]) 【和第一个相等】 ？更新最小位置
 * 返回最小位置
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    strs.sort((a, b) => a.length - b.length);
    let firstStr = strs[0];
    let minIndex = firstStr.length
  
    for (let s of strs) {
       // 使用i来寻找目标位置
      for(let i=0; i<firstStr.length && i<s.length; i++) { 
        if (firstStr[i] !== s[i]) minIndex = Math.min(minIndex, i)
      }
    }
  
    return firstStr.substring(0, minIndex);
  }