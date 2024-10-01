function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  function backtrack(index, s, wordSet) {
    if (index === s.length) return true;
    for (let i = index; i < s.length; i++) {
      const word = s.substring(index, i + 1);
      if (wordSet.has(word) && backtrack(i + 1, s, wordSet)) {
        return true;
      }
    }
    return false;
  }
  return backtrack(0, s, wordSet);
}