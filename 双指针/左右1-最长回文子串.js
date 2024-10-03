const s = "babad" // 输出："bab"
// const s = "cbbd" // 输出："bb"
// const s = "b" // 输出："bb"
console.log(longestPalindrome(s))

// 如果不分别处理奇数和偶数长度，就可能会错过一些最长的回文子串。
// 例如，如果只考虑以单个字符为中心扩展的回文子串，那么就会错过像 "abba" 这样的偶数长度回文子串。
function longestPalindrome(s) {
  var res = "";
  for(var i = 0;i < s.length;i++) {
      var s1 = palindrome(s,i,i);   // 回文子串长度是奇数
      var s2 = palindrome(s,i,i+1); // 回文子串长度是偶数

      res = res.length > s1.length ? res : s1;
      res = res.length > s2.length ? res : s2;
  }
  return res;

  function palindrome(s, l, r){
    while(l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
        l--;
        r++
    }
    return s.substring(l+1,r);
  }
};

// 
function longestPalindrome_2(s) {
  if (s.length < 2)  return s
  
  let res = ''
  for (let i = 0; i < s.length; i++) {
    helper(i, i)// 回文子串长度是奇数
    helper(i, i + 1)// 回文子串长度是偶数
  }

  function helper(L, R) {
    while (L >= 0 && R < s.length && s[L] == s[R]) {
      L--
      R++
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时: [L, R]区间长度n-L+1，但是边界不能取; 所以应取[L+1，n-1]的区间长度是n-L-1
    if (R - L - 1 > res.length) {
      res = s.slice(L + 1, R) // slice也要取[L+1,R-1]这个区间 
    }
  }
  return res

};


// ( n3 )暴力法：寻找子串
function longestPalindrome_1(s) {
  let sub = '', max = 0, maxSub = ''
  for (let fast = 0; fast < s.length; fast++) {
    for (let slow = fast; slow >= 0; slow--) {
      sub = s.substring(slow, fast + 1)
      // console.log(sub, slow, fast)
      if (isPalindrome(sub)) {
        if (sub.length > max) {
          max = sub.length
          maxSub = sub
        }
      }
    }
  }

  return maxSub


  // 左右指针：验证回文串
  function isPalindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let left = 0, right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;

  };
};


