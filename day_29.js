/*Create a class ArrayWrapper that accepts an array of integers in
 its constructor.This class should have two features:*/

 
var ArrayWrapper = function(nums) {
    this.array = nums
};


ArrayWrapper.prototype.valueOf = function() {
    return this .array . reduce((sum , num) =>(num + sum),0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "["+ this.array.join(",")+"]"
}

