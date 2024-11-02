var filter = function (arr, fn) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
};
   // my understand

let arr = [1, 2, 3, 4, 5];
let result = filter(arr, (element) => element % 2 === 0); // Sirf even numbers ko filter karta hai

console.log(result);

// Output: [2, 4]
