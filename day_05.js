var map = function(arr, fn) {
    let newArw = []
    for (let i = 0; i < arr.length; i++){
    newArw[i] = fn(arr[i],i)
    }
    return newArw
};

// my understand/
let arr = [1, 2, 3, 4];
let result = map(arr, (element, index) => element * 3); // Array ke har element ko 3 se multiply karega

console.log(result); // Output: [3, 6, 9, 12]