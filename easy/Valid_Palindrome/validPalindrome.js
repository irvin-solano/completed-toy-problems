const isPalindrome = function (s) {
  const filteredWord = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let j = filteredWord.length - 1;
  for (let i = 0; i < j; i++) {
    if (filteredWord[i] !== filteredWord[j]) {
      return false;
    }
    j--;
  }
  return true;
};

export default isPalindrome;
