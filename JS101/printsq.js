// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(area) {
    for (let i = 0; i < area; i++) {
        console.log("*".repeat(area));
    }
}

printSquare(2);