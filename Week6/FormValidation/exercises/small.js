let userInput = document.getElementById('username');

userInput.addEventListener('input', () => {
    userInput.setCustomValidity('Username should be no more than 15 characers.');
    userInput.checkValidity();
})