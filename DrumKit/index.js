//assign the number of drum buttons to the variable.
let numOfDrumButtons = document.querySelectorAll('.drum'); 

// loop through each button and select all with the class .drum, then assign the event listener to each.
for (let i = 0; i<numOfDrumButtons.length; i++) {
document.querySelectorAll(".drum")[i].addEventListener('click', function (){
    // 'this' identifies the button that was clicked
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

});
}


//detecting keyboard press

document.addEventListener('keydown', function(e) {
     makeSound(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
             let tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
            break;
         case "a":
             let tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;
         case "s":
             let tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;
         case "d":
             let tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
             break;
         case "j":
             let snare = new Audio('sounds/snare.mp3');
             snare.play();
             break;
          case "k":
             let crash = new Audio('sounds/crash.mp3');
             crash.play();
             break;
         case "l":
             let kickBass = new Audio('sounds/kick-bass.mp3');
             kickBass.play();
             break;
    
        default: console.log(buttonInnerHTML);
    }
}
