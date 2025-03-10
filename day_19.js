/*Given an array of asynchronous functions functions, return a new promise promise. 
Each function in the array accepts no arguments and returns a promise.
 All the promises should be executed in parallel./*

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = new Array(functions.length)
        for(let i=0; i<functions.length; i++){
            functions[i]()
            .then((data) =>{
                count++;
                result[i] = data
                if(count === functions.length) return resolve(result)
            }) 
            .catch((err) => reject(err))
        }

    })
};


