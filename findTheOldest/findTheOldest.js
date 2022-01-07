let currentYear = new Date().getFullYear();

function checkUndefined(person1, person2) {
    let age1 = person1['yearOfDeath'] - person1['yearOfBirth'];
    let age2 = person2['yearOfDeath'] - person2['yearOfBirth'];

    if (!(age1) || !(age2)) {
        if (!(age1)) {
            age1 = currentYear - person1['yearOfBirth'];
        }
        if (!(age2)) {
            age2 = currentYear - person2['yearOfBirth'];
        }
        return compareFunc(age1, age2);
    }
    else {
        return compareFunc(age1, age2);
    }
} 


function compareFunc(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}


let findTheOldest = function(people) {
    let oldest = people.sort(checkUndefined)[0];
    return oldest;
}

module.exports = findTheOldest
