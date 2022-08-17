// TODO: Declare any global variables we need

document.addEventListener("DOMContentLoaded", function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  console.log("Hi");

  // TODO: Add event listener and handler for flip and clear buttons
  let headsCount = 0;
  let tailsCount = 0;
  // Flip Button Click Handler
  document.getElementById("flip").addEventListener("click", function () {
    let flippedHeads = Math.random() < 0.5;
    if (flippedHeads) {
      document.getElementById("penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.getElementById("message").innerText = "You Flipped Heads!";
      headsCount++;
    } else {
      document.getElementById("penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.getElementById("message").innerText = "You Flipped Tails!";
    }
    tailsCount++;
  });
  // TODO: Determine flip outcome
  // TODO: Update image and status message in the DOM

  // Update the scorboard
  // TODO: Calculate the total number of rolls/flips
  let total = headsCount + tailsCount;
  // Make variables to track the percentages of heads and tails
  let percentHeads = 0;
  let percentTails = 0;
  // TODO: Use the calculated total to calculate the percentages
  // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
  if (total > 0) {
    percentHeads = Math.round((headsCount / total) * 100);
    percentTails = Math.round((tailsCount / total) * 100);
  }
  // TODO: Update the display of each table cell

  // Clear Button Click Handler
  // TODO: Reset global variables to 0
  // TODO: Update the scoreboard (same logic as in flip button click handler)
});
