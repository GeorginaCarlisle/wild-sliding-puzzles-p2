// Load page before populating with puzzle picture and associated information
window.onload = locatePuzzleNumber();

/**
 * Called on load
 * Uses session storage data to locate the puzzleNumber of the last puzzle completed
 */
function locatePuzzleNumber() {
  // locate puzzleNumber for puzzle just completed
  let completedPuzzleNumbers = sessionStorage.getItem("completedPictures");
  let currentPuzzle = completedPuzzleNumbers.charAt(completedPuzzleNumbers.length -1);
  console.log("Puzzle completed: " + currentPuzzle); 
}
