// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function print(num1, num2) {
    for (let i = num1; i <= num2; i+= 1) {
        console.log(i);
    }
}

print(1, 20);

// Write two versions of the above function. One using a while loop and the other using a for loop.

function list(x, y) {
    let z = x;
    while (z <= y) {
        console.log(z);
        z += 1;
    }
}

list(1, 20)
