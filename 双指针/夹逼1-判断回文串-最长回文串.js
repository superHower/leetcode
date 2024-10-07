const str = "A man, a plan, a canal: Panama"
console.log(isPalindrome(str)) // true

function isPalindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

};



const s = "babad" // 输出："bab"
// const s = "cbbd" // 输出："bb"
// const s = "b"    // 输出："bb"
console.log(longestPalindrome(s))

// 如果不分别处理奇数和偶数长度，就可能会错过一些最长的回文子串。
function longestPalindrome(s) {
  var res = "";
  for(var i = 0;i < s.length;i++) {
      var s1 = palindrome(s,i,i);   // 奇数：以     i    为中心找回文串
      var s2 = palindrome(s,i,i+1); // 偶数：以 (i, i+1) 为中心找回文串

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
