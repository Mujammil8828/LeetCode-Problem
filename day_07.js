var reduce = function(nums, fn, init) {
    let total = init;
    for (let i = 0; i < nums.length; i++) {
      total = fn(total, nums[i]);
    }
    return total;
  };

// my understand
let nums = [1, 2, 3, 4];
let sum = reduce(nums, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 

// Output: 10
