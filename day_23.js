/*Write code that enhances all arrays such that you can call the array.groupBy(fn) 
method on any array and it will return a grouped version of the array.*/


Array.prototype.groupBy = function(fn) {
    return this.reduce ((grouped, item)=>{

        const key = fn(item)
        if (!grouped[key]){
            grouped[key] = [];
        }
        grouped[key].push(item)
        return grouped
    }, {})
};

