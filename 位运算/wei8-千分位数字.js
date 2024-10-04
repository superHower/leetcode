const n = 1234  // 输出："1,234"
// const n = 123456789  //  输出："123,456,789"
console.log(thousandSeparator(n))

function thousandSeparator(n) {
  let count = 0, ans = "";
  while (true){

      n = Math.floor(n / 10);
      ans += (n % 10).toString();
      ++count;

      if(n !== 0)  ans = count % 3 == 0 ? ans += ',' : ans
      else         break
  }

  return ans.split('').reverse().join('');
}

// 索引逢3  
function thousandSeparator_1(n) {
  let numStr = n.toString(), res = '', count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    res += numStr[i]
    count++
    if (count % 3 === 0 && i)  res += ','
  }
  return res.split('').reverse().join("")
}