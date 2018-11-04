module.exports = function make(...a) {
  const b = [];
  let s = 0;
  const index = 0;
  b.push(...a);
  function f(...g) {
    if (typeof g[0] === 'function') {
      s = b[index];
      for (let i = 1; i < b.length; i += 1) {
        s = g[0](s, b[i]);
      }
      return s;
    }
    b.push(...g);
    return f;
  }
  return f;
};
