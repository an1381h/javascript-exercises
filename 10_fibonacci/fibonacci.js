const fibonacci = function(num) {
    //Case of negative input, 0, or 1
    switch(true) {
        case num < 0:
            return "OOPS";
        
        case num === 0:
            return 0;

        case num === 1:
            return 1;
    }
    
    let firstPrevious = 1;
    let secondPrevious = 1;
    let current = 1;
    //Setting up a loop, starting from the 2nd sequence
    for (let i = 2; i < num; i++) {
        current = firstPrevious + secondPrevious;
        firstPrevious = secondPrevious;
        secondPrevious = current;
    }

    return current;

    
};

// Do not edit below this line
module.exports = fibonacci;
