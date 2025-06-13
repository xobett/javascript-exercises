const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(string);
    }
    let repeatedString = arr.join('');
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
