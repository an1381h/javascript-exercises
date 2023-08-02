const removeFromArray = function(array, ...elementsToRemove) {

    //Loops through the array to find the elements to remove
    for (let i = 0; i < array.length; i++) {

        //Loops through the second array to see if the elements match
        for (let j = 0; j < elementsToRemove.length; j++) {
            
            //Checks if the element we want to remove at index j is at index i
            if (array[i] === elementsToRemove[j]) {
                //Removes the element if true
                array.splice(i, 1);
                i--;
            }
        }

    }

    return array;


};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
