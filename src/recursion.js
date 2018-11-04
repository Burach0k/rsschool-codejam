module.exports = function recursion(arg, arr, index) {
  arr = (arr === undefined) ? [[]] : arr;
  index = (index === undefined) ? 0 : index;
  for (const key in arg) {
    if (typeof arg[key] === 'number') {
      arr[index].push(arg[key]);
    } else {
      if (arr[index + 1] === undefined) arr.push([]);
      index += 1;
      recursion(arg[key], arr, index);
      index -= 1;
    }
  }
  return arr;
};
