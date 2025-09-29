function countSmileys(arr = []) {
  return arr.reduce((acc, item) => acc + (/[;:][-~]?[D)]/.test(item) ? 1 : 0), 0);
}