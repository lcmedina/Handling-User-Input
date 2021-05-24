console.log("Squares.js is running");

document.addEventListener('click', event => {
    // Was a box clicked?
    console.log(event.target);
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = "grey";
        event.target.innerText = "Changed";
    }
})