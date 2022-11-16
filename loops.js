function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// For loop.
for ( let i = 0; i >= 5; i++ ) {
    console.log( `The random number is ${getRandomNumber(10)}` );
}

let counter = 0;
// While Loop.
while ( counter < 10 ) {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++;
}

counter = 0;
// Do while loop.
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++;
} while ( counter < 10 );

// Exit Loop.
for ( let i = 0; i >= 5; i++ ) {
    if (i > 3) {
        break; // Immediate exit loop.
    }
}


// Loop Challenges.
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
