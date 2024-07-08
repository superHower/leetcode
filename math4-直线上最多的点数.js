/*
149. 直线上最多的点数
给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。
*/

var maxPoints = function(points) {
  let n = points.length;
  if (n <= 2) return n
  let maxCount = 0;


  for (let i = 0; i < n; i++) {
      let map = new Map();
      let repeatCount = 1;
      for (let j = i + 1; j < n; j++) {
          let dy = points[j][1] - points[i][1];
          let dx = points[j][0] - points[i][0];

          if (dy === 0 && dx === 0) {
              repeatCount++;
              continue;
          }
          let tan = dx === 0 ? 'Infinity' : dy / dx;
          map.set(tan, (map.get(tan) || 0) + 1);
      }
      // maxCount = Math.max(maxCount, repeatCount);

      for (let [tan, count] of map) {
          maxCount = Math.max(maxCount, count + repeatCount);
      }
  }

  return maxCount;
};


/**
 * 这个是GPT改的代码
 */
var maxPoints_2 = function(points) {
  const len = points.length;
  if (len <= 1) return len;

  let maxPointsCount = 1; // 至少有一个点

  for (let i = 0; i < len; i++) {
    let lineMap = new Map();
    let vertical = false;
    let samePointCount = 0;

    for (let j = i + 1; j < len; j++) {
      if (points[i][0] === points[j][0]) {
        if (!vertical) {
          vertical = true;
          let key = 'Infinity|'; // 表示垂直线
          lineMap.set(key, (lineMap.get(key) || 0) + 1);
        }
        samePointCount++; // 记录重复的点
      } else {
        let k = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
        let b = points[i][1] - k * points[i][0];
        let key = k + '|' + b;
        lineMap.set(key, (lineMap.get(key) || 0) + 1);
      }
    }

    // 检查垂直线情况
    if (vertical) {
      let verticalCount = 0;
      for (let p = 0; p < len; p++) {
        if (points[p][0] === points[i][0]) verticalCount++;
      }
      maxPointsCount = Math.max(maxPointsCount, verticalCount);
    }

    // 检查其他直线
    for (let count of lineMap.values()) {
      maxPointsCount = Math.max(maxPointsCount, count + 1); // 加上点本身
    }
  }

  return maxPointsCount;
};

/**
 * 0708-21:53 写了这么多行，还是报错， 呜呜呜呜
 * 没有解决小数相加 不是整数的bug 
 */
var maxPoints_1 = function(points) {
  const len = points.length
  if(len == 1) return 1
  let map = new Map()


  let k,b,x
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++){
      if(points[i][0] == points[j][0]) {
        x = points[i][0]
        k = null
        b = null
      } else {
        x = null
        k = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0])
        b = points[i][1] - k * points[i][0]
      }

      let key = `${k}|${b}|${x}`;
      // console.log('key', key)

      if (!map.has(key)) {
        map.set(key, 1); // 初始化点的数量为 1
      } else {
        map.set(key, map.get(key) + 1); // 增加点的数量
      }
    }
  }

  let maxPointsCount = 0;
  let maxPointsLine = null;
  for (let [key, value] of map) {
    if (value > maxPointsCount) {
      maxPointsCount = value;
      maxPointsLine = key;
    }
  }

  console.log(maxPointsLine)

  let kk = maxPointsLine.split('|')[0]
  let bb = maxPointsLine.split('|')[1]
  let xx = maxPointsLine.split('|')[2]


  let sum = 0

  if(kk == 'null' && bb == 'null') {
    for(let i = 0; i < len; i++) {
      if(points[i][0] == xx) {
        sum ++
      }
    }
 
  }else {
    for(let i = 0; i < len; i++) {
      if(points[i][0] *parseFloat(kk) + parseFloat(bb) == points[i][1]) {
        sum ++
      }
    }
  }
  return sum
};

// const points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// const points = [[1,1],[2,2],[3,3]]
const points = [[-6,-1],[3,1],[12,3]]
//输出：4
console.log(maxPoints(points))