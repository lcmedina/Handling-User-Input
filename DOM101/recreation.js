const myDiv = document.getElementById('root');

const header = document.createElement('h1');
header.textContent = "Meet Lucy";
myDiv.appendChild(header);

const subTitle = document.createElement('h3');

const bio = document.createElement('p');
bio.textContent = "Lucy came to us in October of 2020. A family friend of ours was drving home and happened to come across a house with this small dog tied up outside. She stopped and asked about her and if the homeowner would be willing to surrender her. Turns out that they were trying to rehome her anyway! One facebook post later, we agreed to take in our fourth dog. She's definitely a handful! We were originally told that she was three years old, but our vet estimates she's more around one and a half years old. She's all of eight pounds but thinks she's the size of a pitbull. I like to call her 'leap without looking in physical form', purely because of the way she just throws herself off of any piece of furniture.";
myDiv.appendChild(bio);

