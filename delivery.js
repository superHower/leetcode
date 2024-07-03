/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param order int整型二维数组 订单信息
 * @return int整型
 */
function delivery(order) {
    const rows = order.length;
    const cols = order[0].length;
  
    let steps = 0;
    let x = 0, y = 0;
  
    // 找到第一个订单的位置
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (order[i][j] === 1) {
          x = i;
          y = j;
          break;
        }
      }
      if (x !== 0) break;
    }
  
    // 记录已经送达的订单
    const delivered = new Set();
  
    // 送餐直到所有订单都送达
    while (delivered.size < order.flat().filter(v => v === 1).length) {
      // 标记当前餐桌已送达
      order[x][y] = 0;
      delivered.add(`${x},${y}`);
  
      // 找到最近的未送达的餐桌
      let nearest = null;
      let minDist = Infinity;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (order[i][j] === 1 && !delivered.has(`${i},${j}`)) {
            const dist = Math.abs(x - i) + Math.abs(y - j);
            if (dist < minDist) {
              nearest = { x: i, y: j };
              minDist = dist;
            }
          }
        }
      }
  
      // 移动到最近的餐桌
      x = nearest.x;
      y = nearest.y;
      steps += minDist;
    }
  
    return steps;
  }

module.exports = {
  delivery: delivery,
};
