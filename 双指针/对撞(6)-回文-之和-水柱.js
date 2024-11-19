/**
 * 对撞指针
 * ----------------------------------------------------------------------------------------------------------
 * 1. 判断回文串         const str = "A man, a plan, a canal: Panama" // true
 * 2. 最长回文串 (发散)  const s = "cbbbd" // 输出："bb"  // const s = "babad" // 输出："bab"
 * 3. 回文子串个数（发散）
 * 3. 两数之和-有序数组  const numbers = [2,7,11,15], target = 9 // [1,2]：解释：返回两数的位置
 * 4. 三数之和           const nums = [-1,0,1,2,-1,-4]    // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
 * 5. 盛水最多的容器     const height_1 = [1,8,6,2,5,4,8,3,7]  // 49 解释：在8和7两根柱子之间盛水最多=7 * (8-1)
 * 6. 接雨水             const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
 * -----------------------------------------------------------------------------------------------------------
 *   while(left < right) {
 *     left-- 
 *     right++
 *   }
 * --------------------------------------------------------------------------------------------------------
 * 注意！
 * 
 * 三数之和： 自己去重时，是直接continue,而不是while循环
 * --------------------------------------------------------------------------------------------------------*/

// 【判断回文串】：左右对撞
const str = "A man, a plan, a canal: Panama" // true
function isPalindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();//保证纯英文与数字
    let left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};


// 【最长回文串】：中心发散
/**
 * 迭代寻找子串：区分单独的（i, i）和前后相同的（i,i+1）
 *     能找到就更新最长
 */
const s = "cbadbdacccbd" // 输出："bb"  // const s = "babad" // 输出："bab"
console.log(longestPalindrome(s))
function longestPalindrome(s) {
  let maxStr = "";
  for(let i = 0;i < s.length;i++) {
    palindrome(s,i,i)   //     单独的情况: c
    palindrome(s,i,i+1); // 前后相等的情况: cc
  }
  return maxStr
  function palindrome(s, l ,r) {
    while(l >= 0 && r < s.length && s[l] == s[r]) {l--;r++}
    let curLen = r-l-1
    if(curLen > maxStr.length)  maxStr = s.slice(l+1, r) // 更新最长字符串
  }

};

// 【回文子串个数】：中心发散
/**
 * 迭代寻找子串：注意区分单独和相等
 */
function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      for (let l = i, r = i;   l >= 0 && s[l] === s[r]; l--, r++) count++;
      for (let l = i, r = i+1; l >= 0 && s[l] === s[r]; l--, r++) count++;
  }
  return count;
};




// 【两数之和-有序数组】
const numbers = [2,7,11,15], target = 9 // [1,2]：解释：返回两数的位置
function twoSum(numbers, target) {
  let left = 0, right = numbers.length-1
  while(left < right) {
    if( numbers[left] + numbers[right] === target)     return [left+1, right+1]
    else if( numbers[left] + numbers[right] < target)  left++
    else                                               right--
  }

  return []
};

// 【三数之和】
// 排序-》自己去重-》sum==0 -》左移左去重；右移右去重
const nums = [-1,0,1,2,-1,-4]    // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
function threeSum(nums) { 
  if(nums.length < 3 || !nums) return []

  let ans = []
  nums.sort((a,b)=> a-b) // 排序

  for(let i = 0; i< nums.length - 2; i++) {
    let left = i+1, right = nums.length-1

    if(i>0 && nums[i] == nums[i-1]) continue // 自己 去重

    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if(sum == 0) {
         ans.push([nums[i], nums[left], nums[right]]) // 更新答案

         left++
         while(left < right && nums[left] == nums[left-1]) left++ // 左 去重

         right--
         while(left < right && nums[right] == nums[right+1]) right-- // 右 去重

      }else if(sum < 0)   left++ // 小了
      else right--               // 大了
    }
  }
  return ans
}



// 【盛水最多的容器】
// 水量 = 短柱*（右-左）
const height_1 = [1,8,6,2,5,4,8,3,7]  // 49 解释：在8和7两根柱子之间盛水最多=7 * (8-1)
function maxArea(height) {
  let left = 0; right = height.length-1;
  let max = 0

  while(left < right) {
      let area = Math.min(height[left], height[right]) * (right - left)
      max = Math.max(max, area)// 更新最大值

      if(height[left] > height[right]) right--
      else left++
  }
  return max
};

// 【接雨水】
// 先确定左右两边 最高柱 -》 哪一边柱子低？ans+= 哪一边的高度差
const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
function trap(height) {
  let ans = 0, left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;


  while (left < right) {
      leftMax = Math.max(leftMax, height[left]);
      rightMax = Math.max(rightMax, height[right]);
 
      if (height[left] < height[right]) ans += leftMax - height[left++]
      else                              ans += rightMax - height[right--]
  }

  return ans;
};
