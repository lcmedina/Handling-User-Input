// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
function positiveNumbers(arrOfNums) {
    let arrOfPosNums = []; //empty array to store the positive numbers
    for (eachNum of arrOfNums) {
        if (eachNum >= 0) { //checks if each index is positive.
            arrOfPosNums.push(eachNum); // pushes the positive integers to our empty array.
        }
    }
    return arrOfPosNums;
}


console.log(positiveNumbers([1, -3, 5, -3, 0]));