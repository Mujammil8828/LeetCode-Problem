function memoize(fn) {
    const cache = {};
    return function(...args) {
     const key = JSON.stringify(args);
     if (key in cache) {
       return cache[key];
     }
     const result = fn.apply(this, args);
     cache[key] = result;
     
     return result;
   }
   
 }


 //My Understand

 let add = (a, b) => a + b;
let memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Output: 3 (calculation hui)
console.log(memoizedAdd(1, 2)); // Output: 3 (cached result, calculation nahi hui)
console.log(memoizedAdd(2, 3)); // Output: 5 (naya calculation hua)
