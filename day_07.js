var reduce = function (nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

// my understand
let nums = [1, 2, 3, 4];
let sum = reduce(nums, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 

// Output: 10
