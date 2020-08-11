// This function is looking for median of two arrays

const nums1 = [1,2];
const nums2 = [3,4];

function solution(nums1, nums2) {
  function concatAndSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b) => a - b);
  }
  
  const concated = concatAndSort(nums1, nums2);

  if (concated.length % 2 !== 0) {
    const item = Math.floor(concated.length/2);
    return concated[item];
  } else {
    const item = concated.length/2;
    return (concated[item] + concated[item-1])/2;
  }
}

console.log(solution(nums1, nums2));
