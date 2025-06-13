const reverseString = function(string) {
    let arr = string.split('');
    let reversedString = arr.reverse().join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
