const removeFromArray = function(arr, ...removeIndex) {
    for (let i = 0; i < removeIndex.length; i++){
        let index = arr.findIndex(item => item === removeIndex[i]);
        console.log(index[i]);
        arr.splice(index, 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
