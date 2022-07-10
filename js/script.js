const dogs = [3, 5, 2, 12, 1];
const adultDogs = [];
const puppyDogs = [];
function checkDogs(x) {
    if (x>=3) {
        adultDogs.push(x);
    } else {
        puppyDogs.push(x);
    }
};

checkDogs(dogs[0]);
checkDogs(dogs[1]);
checkDogs(dogs[2]);
checkDogs(dogs[3]);
checkDogs(dogs[4]);

console.log( adultDogs.length + " yetishkin, " + puppyDogs.length + " balaca it var." );