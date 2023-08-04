const findTheOldest = function(peopleArray) {
    const oldest = peopleArray.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
    return oldest;
};

//To get the age of the person
function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
