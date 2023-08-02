const leapYears = function(year) {
    //Checks when year is divisible by 4 and 100 and 400
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        return true;

    //Checks when year is divisible by 4 and 100
    } else if (year % 4 == 0 && year % 100 == 0) {
        return false;

    //Checks when year is only divisible by 4
    } else if (year % 4 == 0) {
        return true;
    }

    //Other general cases
    return false;
};

// Do not edit below this line
module.exports = leapYears;
