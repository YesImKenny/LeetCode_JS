const climbStairs = n => {
  if (n <= 3) return n;
  
  let waysToStep = [0, 1, 2, 3];
  
  for (let i = 4; i <= n; i++) {
    waysToStep.push(waysToStep[i-1] + waysToStep[i-2]);
  }
  
  return waysToStep[n];
};

module.exports = climbStairs;
