const form = document.querySelector('form');
console.log("My form is ", form);
const nameInput = document.querySelector("#name");

function checkName(name) {
    myRegex = /[A-Z][A-Za-z]+/ //run the name to check for any upper or lower case letter. Must start with an uppercase
    return myRegex.test(name); //returns true or false
}

function checkName2() {
    myRegex = /[A-Z][A-Za-z]+/
    if (!checkName(nameInput.value)) {
        nameInput.setCustomValidity(("Please use only lowercase or uppercase letters."))
     } else {
         nameInput.setCustomValidity("")
         nameInput.reportValidity();
     }
}


nameInput.addEventListener('change', checkName2, false);
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     const nameInput = document.querySelector('#name');
//     console.log('The name input value is ', nameInput.value);
// });


