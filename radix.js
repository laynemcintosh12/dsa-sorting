function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

function digitCount(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  return nums.reduce((maxDigits, num) => Math.max(maxDigits, digitCount(num)), 0);
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };