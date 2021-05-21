const newHeading = document.getElementById('heading');
newHeading.textContent = "Toppings";
//adding the heading of "toppings"

const burg = document.getElementById('burger');
burg.classList.add('list-item');
//adding a class to the list item burger

const newLi = document.createElement('li');
const myList = document.getElementById('list');
myList.appendChild(newLi);
//creating a new list item

const myRestaurant = document.createElement('a');
myRestaurant.setAttribute('href', 'http://jupiterpizzaandwaffles.com/');
myRestaurant.innerHTML = 'Jupiter Pizza & Waffles';
//creating a link

const emptySpace = document.getElementById('food');
food.appendChild(myRestaurant);
//putting that link in an empty div