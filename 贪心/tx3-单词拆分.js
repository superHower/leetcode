function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  let i = 0;
  while (i < s.length) {
    let found = false;
    for (let len = 1; len <= s.length - i; len++) {
      const word = s.substring(i, i + len);
      if (wordSet.has(word)) {
        i += len;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}