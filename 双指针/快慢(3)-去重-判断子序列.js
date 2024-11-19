/**
 * 快慢指针
 * ----------------------------------------------------------------------------------------------------------
 * 1. 移出元素   const nums1 = [1,2,2,3,4,2], val = 2 // [1,3,4]
 * 2. 移动0      const nums2 = [0,1,0,3,12]           // 输出: [1,3,12,0,0]
 * 3. 判断子序列 const s = "axc", t = "ahbgdc"        // false
 * 
 *----------------------------------------------------------------------------------------------------------*/
// 【移出元素】
const nums1 = [1,2,2,3,4,2], val = 2 // [1,3,4]
/**
 * 快的不停移动
 * 慢的要是==val  那么 ，慢处的位置 就是 快值
 */
function removeElement(nums, val) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) { // 快指针不停移动
    if (nums[fast] !== val) nums[slow++] = nums[fast]
  }
  
  return nums.slice(0, slow);
};


// 【移动0】
const nums2 = [0,1,0,3,12] // 输出: [1,3,12,0,0]
function moveZeroes(nums2) {
  let slow = 0; // j 用来记录非零元素的索引位置
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) nums[slow++] = nums[fast]; // 将非零元素放到前面
  }
  // 从 slow 开始填充零
  while (slow < nums.length) nums[slow++] = 0;
  
  return nums
};


// 【判断子序列】
const s = "axc", t = "ahbgdc" // false
// const s = "abc", t = "ahbgdc" // true
function isSubsequence(s, t) {
  let left = 0, right = 0;

  for(; right <t.length &&left < s.length; right++){
    if(s[left]==t[right]) left++
  }

  return left == s.length
};