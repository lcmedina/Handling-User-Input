// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(string) {
   let i = string.length+4; // Easily call string length, add 4 for the spaces and dashes on the middle line.
   let emptyString = ""; //empty string to store dashes.
    while (i) { //checks to see if i has a value aka truthy.
        emptyString = `${emptyString}-`;//adding a dash each loop.
        i--; //decrementing for each unit of length.
    }
    let banner = `${emptyString}\n- ${string} -\n${emptyString}`;
    console.log(banner);
}

printBanner('Welcome to DigitalCrafts');