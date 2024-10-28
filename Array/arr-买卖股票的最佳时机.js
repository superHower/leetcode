/**
 *  可以某天 买入；并在 未来某天 卖出
 */

const prices = [7,1,5,3,6,4]
// const prices = [7,6,4,3,1]
console.log(maxProfit(prices)) // 5

function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let minPrice = prices[0], max = 0

  for(let i = 0; i< prices.length; i++) {
    if(minPrice > prices[i])   minPrice = prices[i]
    else                       max = Math.max(max, prices[i] - minPrice)
  }
  return max
}