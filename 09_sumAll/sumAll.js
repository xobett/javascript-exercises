const sumAll = function(firstNumber, secondNumber) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) &&
        (firstNumber >= 0 && secondNumber >= 0)){
        let totalSum = 0;
        let start = Math.min(firstNumber, secondNumber);
        let end = Math.max(firstNumber, secondNumber);
    
        for (let i = start; i <= end; i++) {
            totalSum += i;
        };
        return totalSum;
    }
    else{
        return "ERROR";
    }
};
// Do not edit below this line
module.exports = sumAll;
