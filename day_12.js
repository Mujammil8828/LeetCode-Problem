var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
  };


  // My understand
  
  // Do promises define karte hain
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

addTwoPromises(promise1, promise2).then(result => {
  console.log(result); // Output: 15
});
