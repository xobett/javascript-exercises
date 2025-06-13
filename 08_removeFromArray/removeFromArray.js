const removeFromArray = function(arr, ...removeIndex) {
    for (const index of removeIndex){
        while (arr.includes(index)) {
            for (let i = 0; i < arr.length; i++){
                if (arr[i] === index){
                    arr.splice(i, 1);
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
