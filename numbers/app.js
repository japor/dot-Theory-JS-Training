// Collect input from a user
// Convert the input to a number
const inputLow = parseInt(prompt("lowest number"));
const inputHigh = parseInt(prompt("highest number"));

if (lowNumber >= 0 && highNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber =
    Math.floor(Math.random() *(highNumber-lowNumber+1)) + lowNumber;

  // Create a message displaying the random number
  console.log(
    `${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`
  );
} else {
  console.log("Try again.");
}
