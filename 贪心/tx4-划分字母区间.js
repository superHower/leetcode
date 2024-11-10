const s = "ababcbacadefegdehijhklij" // [9,7,8]
/**
 * 同一字母最多出现在一个片段中
 * 且尽可能多的的划分区间
 * 
 *  存放某字母的最远位置   -->  
 *  for() maxPos[S[i]] = i
 */
console.log(partitionLabels(s))
function partitionLabels (S)  {
  const maxPos = {};
  for (let i = 0; i < S.length; i++) { // 存放字母与它的最远位置
    maxPos[S[i]] = i;
  }

  const res = [];
  let start = 0;         // 某区间的起始位置
  let scannedMaxPos = 0; // 已扫描的字符中最远的位置

  for (let i = 0; i < S.length; i++) {
    scannedMaxPos = Math.max(scannedMaxPos,  maxPos[S[i]]); // 更新「已扫描的字符中最远的位置」
    
    if (i == scannedMaxPos) { // 到达 （各字符公认的）最远位置
      res.push(i - start + 1);
      start = i + 1;        // 更新，下个 区间 的起始
    }
  }
  return res;
};