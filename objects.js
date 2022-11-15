/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 8,
    photo: 'img/aussie.jpg'
  },
  { 
    name: 'Patches',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: 1,
    photo: 'img/tabby.jpg'
  },
  { 
    name: 'Pugsley',
    type: 'Dog',
    breed: 'Pug',
    age: 6,
    photo: 'img/pug.jpg'
  },
  { 
    name: 'Simba',
    type: 'Cat',
    breed: 'Persian',
    age: 5,
    photo: 'img/persian.jpg'
  },
  { 
    name: 'Comet',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    photo: 'img/golden.jpg'
  }
];

let html = '';
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

for ( let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
