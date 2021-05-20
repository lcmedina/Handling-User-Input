// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width, height) {
    let count = height; // to have access to height.
    while (count > 0) { // loop that determines the rows.
        if (count === 1 || count == height) { // first and last line.
            for(let x = 1; x <= width; x++) {
                process.stdout.write("*") //writes an indivual character without going to a new line. Draws a line from 1 to the width.
            }
        } else {
            process.stdout.write("*") // has at least one at the beginning.
            for (let x = 2; x <= width - 1; x++) {
                process.stdout.write(" ") //everything in between.
            }
            process.stdout.write("*") // has at least one at the end.
        }
        console.log(""); // creates a new line
        count--;
    }
}

printBox(6, 4)