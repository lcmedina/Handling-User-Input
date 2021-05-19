// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width, height) {
    let count = height;
    while (count > 0) {
        if (count === 1 || count == height) {
            for(let x = 1; x < width; x++) {
                process.stdout.write("*")
            }
        }
    }
}