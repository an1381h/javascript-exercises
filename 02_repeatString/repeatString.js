const repeatString = function(string, num) {
    //Takes care of the case when num is a negative number by returning ERROR
    if (num < 0) {
        return "ERROR";
    }
    
    //The final string that we will be returning
    let finalString = "";

    //Loop used to create the string that is asked
    for (let i = 0; i < num; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
