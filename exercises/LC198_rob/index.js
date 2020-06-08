function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  
  let loot = [nums[0], Math.max(nums[0], nums[1])];
  
  for (let i = 2; i < nums.length; i++) {
    loot.push(Math.max(loot[i-1], nums[i]+loot[i-2]))
  }
  return loot.pop();
}

module.exports = rob;
