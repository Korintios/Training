function sumIntervals(xs) {
  let ys = xs.sort(([a,b], [c,d]) => a-c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a,b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b-m);
    m = Math.max(m, b);
  }
  return res;
}