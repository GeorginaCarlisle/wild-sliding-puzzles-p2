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
  loadPuzzlePicture(currentPuzzle);
}

/**
 * Called by locatePuzzleNumber
 * currentPuzzle argument is used to select corrosponding puzzle picture
 * Puzzle picture is then loaded to the DOM
 */
function loadPuzzlePicture(currentPuzzle) {
  let puzzlePicture = ``;
  switch (currentPuzzle) {
    case "0":
      puzzlePicture = `<img src="assets/images/Puffin/puffin-original.webp" alt="Image of a Puffin with a catch of fish in it's mouth. Image shows Puffin's head and brightly coloured orange beak." class="image">`;
    break;
    default: alert("puzzle completed not recoginsed, please contact developer");
    break;
  }
  let pictureContainer = document.getElementById("original-picture");
  pictureContainer.innerHTML = puzzlePicture;
}