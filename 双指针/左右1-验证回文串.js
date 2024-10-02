const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s)) // true

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

