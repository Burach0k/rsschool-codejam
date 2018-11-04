module.exports = function sumOfOther(array) {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr[i] = array.reduce((a, b, c) => (c === i ? a : a + b), 0);
  }
  return arr;
};
