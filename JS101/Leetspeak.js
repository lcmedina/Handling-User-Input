// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetspeak(word) {
    let answer =""; //empty string to store letters.

    for (i=0; i<word.length; i++) {
        let currentLetter = word[i].toLowerCase(); // converts the current index(letter) to lowercase.

        //if statement to check our conditions.
        if (currentLetter == 'a') {
            answer += '4'
        } else if (currentLetter == 'e') {
            answer += '3'
        } else if (currentLetter == 'g') {
            answer += '6'
        } else if (currentLetter == 'i') {
            answer += '1'
        } else if (currentLetter == 'o') {
            answer += '0'
        } else if (currentLetter == 's') {
            answer += '5'
        } else if (currentLetter == 't') {
            answer += '7'
        } else {
            answer += currentLetter;
        }
    }
    return answer;
}

console.log(leetspeak('Zaphod Beeblebrox'));