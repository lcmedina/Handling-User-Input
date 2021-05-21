// console.log("Hello World");
// let listItems = document.getElementsByTagName('li')[1];
// console.log("My li tags are ", listItems);

// document.getElementsByTagName('li')[1].textContent = "Hello DOM!"

// let navList = document.getElementById('nav-list');
// console.log('The nav-list is ', navList);

// const heading = document.getElementById('heading');
// const listItemsByClass = document.querySelectorAll('.nav-link');

// heading.innerText = "Links";
// heading.innerHTML = "Not Links";
// heading.textContent = `<a href="#">Not a Link</a>`;

// console.log(heading, listItems, listItemsByClass);

// // Create ane HTML element on the DOM

// let newLi = document.createElement('li');
// newLi.textContent = "I'm a new li!";
// newLi.classList.add('nav-link');
// navList.appendChild(newLi);

const newHeading = document.createElement('h1'); //created new heading element
const newList = document.createElement('ul'); //created an empty list with three list items.
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

const rootDiv = document.getElementById('root'); //grabbed root div from our html, give us acces to our DOM of this div.

newHeading.textContent = "DOM is fun!";
newHeading.style.color = "green";
newHeading.id = "new-heading";
rootDiv.appendChild(newHeading); //added the heading as child element of our div.

listItem1.textContent = "Our first li";
newList.appendChild(listItem1);

rootDiv.appendChild(newList);