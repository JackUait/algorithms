// This function is looking for a common prefix of strings in the array

const strs = ["flower","flow","flight"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  let prefix = [];
  
  const min = Array.from(strs.reduce((a, b) => a.length <= b.length ? a : b));

  for (let i = 0; i < min.length; i++) {
    let check = strs.every((str) => {
      return str[i] === min[i];
    })
    
    if (check === false) break;

    if (check) prefix.push(min[i]);
  }  
  
  
  return prefix.join('');
}

console.log('result:',longestCommonPrefix(strs));
