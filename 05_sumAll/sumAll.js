const sumAll = function(num1, num2) {
    //Case of an input being negative resulting in "ERROR"
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    //Case of a non-number input resulting in "ERROR"
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    //Checks which input is larger
    if (num1 >= num2) {
        return summing(num2, num1);
    }
    return summing(num1, num2)
};

//Creating a function for readability
function summing(smallNum, bigNum) {
    //The final sum of adding everything together
    let finalSum = 0;

    //Looping through the numbers
    for (let i = smallNum; i <= bigNum; i++) {
        finalSum += i;
    }

    //Return the final sum
    return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
