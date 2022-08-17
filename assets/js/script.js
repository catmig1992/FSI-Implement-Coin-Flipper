// TODO: Declare any global variables we need
let headsCount = 0;
let tailsCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  // console.log("Hi");

  // TODO: Add event listener and handler for flip and clear buttons

  // Flip Button Click Handler
  document.getElementById("flip").addEventListener("click", function () {
    const flipResult = Math.random();
    let heads = false;
    if (flipResult < 0.5) {
      heads = true;
    }
    console.log(heads);
    if (heads) {
      document.getElementById("penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.getElementById("status_message").innerText =
        "You Flipped Heads!";
      headsCount++;
      document.getElementById("heads").innerText = headsCount;
    } else {
      document.getElementById("penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.getElementById("status_message").innerText =
        "You Flipped Tails!";
      tailsCount++;
      document.getElementById("tails").innerText = tailsCount;
    }
    console.log(headsCount, tailsCount);
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM

    // Update the scoreboard
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

      document.getElementById("heads-percent").innerText = `${percentHeads}%`;
      document.getElementById("tails-percent").innerText = `${percentTails}%`;
    }
  });
  // TODO: Update the display of each table cell

  // Clear Button Click Handler
  document.getElementById("clear").addEventListener("click", function () {
    headsCount = 0;
    tailsCount = 0;
    document.getElementById("status_message").innerText = "New game!";
    document.getElementById("heads").innerText = 0;
    document.getElementById("tails").innerText = 0;
    document.getElementById("heads-percent").innerText = `0%`;
    document.getElementById("tails-percent").innerText = `0%`;
    // console.log("reset flip!");
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
  });
});
