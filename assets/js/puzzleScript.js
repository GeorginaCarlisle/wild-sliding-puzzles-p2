// Global variables that need to be accessible in multiple functions
let preventClick = false;

// Load page before setting the game picture
window.onload = chooseGamePicture();

// window.onload = setGamePicture();

// Load page before adding event listeners to modal buttons
window.onload = function() {
  // Add click event listener to the Sneaky peek button
  let btnSneakyPeek = document.getElementById("button-sneaky-peek");
  btnSneakyPeek.addEventListener('click', sneakyPeak);
  // Add click event listener to the Instructions button
  let btnInstructions = document.getElementById("button-instructions");
  btnInstructions.addEventListener('click', instructions);
}

/**
 * Called on load
 * Generates a random number and checks to see if that puzzle number has already been completed
 * While there is a match a new number will be genereated until no match is present, a break out after 100 iterations is included
 * New puzzle number saved in local storage and setGamePicture is called
 */
function chooseGamePicture() {
  // Generate a random number, range of random numbers generated reflects the number of puzzle pictures available
  let pictureNumber = Math.floor(Math.random() * 0);
  console.log("picture number chosen is " + pictureNumber);
  // link to session storage
  let previousPictureNumbers = sessionStorage.getItem("completedPictures");
  // Check to see if any pictures have been completed
  if (previousPictureNumbers){
    // There has been a previous picture number saved
    let positionOfMatch = previousPictureNumbers.search(pictureNumber);
    console.log("Position match is: " + positionOfMatch);
    // New number doesn't match any of previous numbers
    if (positionOfMatch === -1) {
      console.log("New picture confirmed as: " + pictureNumber);
      // New picture number now added to the string
      let newPictureNumbers = previousPictureNumbers + pictureNumber;
      console.log("New picture numbers are: " + newPictureNumbers);
      sessionStorage.setItem("completedPictures", newPictureNumbers);
      // Call setGamePicture and pass on the chosen picture number
      setGamePicture(pictureNumber);
    }
    // New number does match a previous number
    else {
      // Following loop to run until there is no match, or break point reached
      let loop = 0;
      while (positionOfMatch !== -1) {
        console.log("While loop running");
        console.log("loop number: " + loop);
        loop++;
        // generate a new random number
        pictureNumber = Math.floor(Math.random() * 0);
        console.log("New picture number is: " + pictureNumber);
        // checks for a match
        positionOfMatch = previousPictureNumbers.search(pictureNumber);
        console.log("Position match is: " + positionOfMatch);
        // break out clause to prevent loop from running indefinitely
        if (loop === 100) {
          console.log ("breaking out after 100 iterations");
          sessionStorage.removeItem("completedPictures");
          alert("All available puzzles have now been viewed. Puzzle data will now be reset and previously shown puzzles will be shown again")
          break;
        }
        else {
          continue;
        }
      }
      // New picture number now generated that doesn't match
      console.log("New picture confirmed as: " + pictureNumber);
      // New picture number now added to the string. Reset previousPictureNumbers variable to pick up clearing of data when all puzzles have been completed.
      previousPictureNumbers = sessionStorage.getItem("completedPictures");
      let newPictureNumbers = previousPictureNumbers + pictureNumber;
      console.log("New picture numbers are: " + newPictureNumbers);
      sessionStorage.setItem("completedPictures", newPictureNumbers);
      // Call setGamePicture and pass on the chosen picture number
      setGamePicture(pictureNumber);
    }
  }
  // no completedPictures data currently stored. This is the first picture to be completed in this tab.
  else {
    sessionStorage.setItem("completedPictures", pictureNumber);
    // Call setGamePicture and pass on the chosen picture number
    setGamePicture(pictureNumber);
  }
}


/**
 * Set game picture will be called once a game picture has been randomly chosen.
 * pictureNumber argument is used to select corrosponding tile pictures
 * A style background image will be applied to each tile in the grid, as well as a click event listener
 * the background image for tile 7 will remain empty
 * picture is set correct at this point and the scramblePicture function will now be called
 */
function setGamePicture(pictureNumber) {
  // Locate tilePictures for pictureNumber chosen
  let tilePictures = [];
  switch(pictureNumber) {
    case 0: 
      tilePictures = [
      `url(assets/images/Puffin/puffin-tile-1.webp)`,
      `url(assets/images/Puffin/puffin-tile-2.webp)`,
      `url(assets/images/Puffin/puffin-tile-3.webp)`,
      `url(assets/images/Puffin/puffin-tile-4.webp)`,
      `url(assets/images/Puffin/puffin-tile-5.webp)`,
      `url(assets/images/Puffin/puffin-tile-6.webp)`,
      ``,
      `url(assets/images/Puffin/puffin-tile-8.webp)`,
      `url(assets/images/Puffin/puffin-tile-9.webp)`,
      ];
    break;
    default:
      console.log("No match for picture number");
      alert("puzzle pictures cannot be found, please contact developer");
    break;
  }
  let numberOfTiles = tilePictures.length;
  // loop assigning each tile in turn an image, images applied in array order so that the correct image ends up in the correct tile
  for (let i = 0; i < numberOfTiles; i++) {
    let tile = document.getElementById('tile-' + (i+1));
    tile.style.backgroundImage = tilePictures[i];
    // Event listener added to each tile which passes the details of the tile clicked to the clickedTile function
    tile.addEventListener('click', function(){ 
      if (!preventClick){
        clickedTile(tile);
      } // clickedTile function will not run during tile slide and tile swap phases, see slideTileRight etc.
    });
  }
  console.log("Game picture set");
  scrambleGamePicture();
}

/**
 * Called by setGamePicture
 * Places each tile in a different grid position as per scrambleSetting
 * ScrambleSetting has been tested to ensure the puzzle is solvable
 */
function scrambleGamePicture() {
  // Array items specify a grid area (grid-row-start/grid-column-start/grid-row-end/column-row-end) 
  let scrambleSetting = [
    "2/1/3/2",
    "3/2/4/3",
    "1/2/2/3",
    "3/3/4/4",
    "2/2/3/3",
    "1/3/2/4",
    "3/1/4/2",
    "1/1/2/2",
    "2/3/3/4"
  ]
  // loop to give each tile in turn it's scrambled grid-area value
  for (let i = 0; i < 9; i++) {
    let tile = document.getElementById('tile-' + (i+1));
    tile.style.gridArea = scrambleSetting[i];
    console.log(tile);
  }
}

/**
 * Called when a tile is clicked and passed the details of the tile clicked. Event listener set in setGamePicture
 * Grid position of tile clicked analysed and corrosponding function (example gridOneClicked) called
 */
function clickedTile(tile) {
  if (tile.id === "tile-7") {
    alert("There is no tile here to click, it is an empty space");
  }
  else {
    console.log(tile);
    let gridPosition = tile.style.gridArea;
    console.log("Grid position of tile clicked is: " + gridPosition);
    switch(gridPosition) {
      case "1 / 1 / 2 / 2": gridOneClicked(tile);
      break;
      case "1 / 2 / 2 / 3": gridTwoClicked(tile);
      break;
      case "1 / 3 / 2 / 4": gridThreeClicked(tile);
      break;
      case "2 / 1 / 3 / 2": gridFourClicked(tile);
      break;
      case "2 / 2 / 3 / 3": gridFiveClicked(tile);
      break;
      case "2 / 3 / 3 / 4": gridSixClicked(tile);
      break;
      case "3 / 1 / 4 / 2": gridSevenClicked(tile);
      break;
      case "3 / 2 / 4 / 3": gridEightClicked(tile);
      break;
      case "3 / 3 / 4 / 4": gridNineClicked(tile);
      break;
      default: alert("tile not recognised, please contact developer");
    } 
  }
}

/**
 * Called by clickedTile when the tile in grid space 1 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridOneClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "1 / 2 / 2 / 3") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 1 / 3 / 2") {
    tileSlideDown(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 2 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridTwoClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "1 / 3 / 2 / 4") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 2 / 3 / 3") {
    tileSlideDown(tile);
  }
  else if (emptySpace.style.gridArea === "1 / 1 / 2 / 2") {
    tileSlideLeft(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 3 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridThreeClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "1 / 2 / 2 / 3") {
    tileSlideLeft(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 3 / 3 / 4") {
    tileSlideDown(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 4 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridFourClicked(tile) {
   let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "2 / 2 / 3 / 3") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "3 / 1 / 4 / 2") {
    tileSlideDown(tile);
  }
  else if (emptySpace.style.gridArea === "1 / 1 / 2 / 2") {
    tileSlideUp(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 5 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridFiveClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "2 / 3 / 3 / 4") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "3 / 2 / 4 / 3") {
    tileSlideDown(tile);
  }
  else if (emptySpace.style.gridArea === "1 / 2 / 2 / 3") {
    tileSlideUp(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 1 / 3 / 2") {
    tileSlideLeft(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 6 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridSixClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "3 / 3 / 4 / 4") {
    tileSlideDown(tile);
  }
  else if (emptySpace.style.gridArea === "1 / 3 / 2 / 4") {
    tileSlideUp(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 2 / 3 / 3") {
    tileSlideLeft(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 7 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridSevenClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "3 / 2 / 4 / 3") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 1 / 3 / 2") {
    tileSlideUp(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 8 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridEightClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "3 / 3 / 4 / 4") {
    tileSlideRight(tile);
  }
  else if (emptySpace.style.gridArea === "2 / 2 / 3 / 3") {
    tileSlideUp(tile);
  }
  else if (emptySpace.style.gridArea === "3 / 1 / 4 / 2") {
    tileSlideLeft(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called by clickedTile when the tile in grid space 9 is clicked
 * Checks if clicked tile is next to an empty space and either calls the correct slide function 
 * or alerts user that the tile cannot be slid
 */
function gridNineClicked(tile) {
  let emptySpace = document.getElementById('tile-7');
  if (emptySpace.style.gridArea === "2 / 3 / 3 / 4") {
    tileSlideUp(tile);
  }
  else if (emptySpace.style.gridArea === "3 / 2 / 4 / 3") {
    tileSlideLeft(tile);
  }
  else {
    alert("Tile clicked cannot be slid into the empty space");
  }
}

/**
 * Called when clickedTile is in the grid box to the left of the space (tile-7)
 * Initiates right-slide annimation to slide the clicked tile one grid box width to the right
 * Calls swapTile function after 450ms (annimation is 500ms)
 * Prevents click event listeners for activating further code until after animation and tiles swapped
 */
function tileSlideRight(tile) {
  console.log("slide tile right annimation activated");
  tile.style.animationName = "right-slide";
  preventClick = true;
  setTimeout(function(){ swapTile(tile);}, 450);
  setTimeout(function(){ preventClick = false; }, 500);
}

/**
 * Called when clickedTile is in the grid box to the right of the space (tile-7)
 * Initiates left-slide annimation to slide the clicked tile one grid box width to the right
 * Calls swapTile function after 450ms (annimation is 500ms)
 * Prevents click event listeners for activating further code until after animation and tiles swapped
 */
function tileSlideLeft(tile) {
  console.log("slide tile left annimation activated");
  tile.style.animationName = "left-slide";
  preventClick = true;
  setTimeout(function(){ swapTile(tile);}, 450);
  setTimeout(function(){ preventClick = false; }, 500);
}

/**
 * Called when clickedTile is in the grid box below the space (tile-7)
 * Initiates up-slide annimation to slide the clicked tile one grid box width to the right
 * Calls swapTile function after 450ms (annimation is 500ms)
 * Prevents click event listeners for activating further code until after animation and tiles swapped
 */
function tileSlideUp(tile) {
  console.log("slide tile up annimation activated");
  tile.style.animationName = "up-slide";
  preventClick = true;
  setTimeout(function(){ swapTile(tile);}, 450);
  setTimeout(function(){ preventClick = false; }, 500);
}

/**
 * Called when clickedTile is in the grid box above the space (tile-7)
 * Initiates down-slide annimation to slide the clicked tile one grid box width to the right
 * Calls swapTile function after 450ms (annimation is 500ms)
 * Prevents click event listeners for activating further code until after animation and tiles swapped
 */
function tileSlideDown(tile) {
  console.log("slide tile down annimation activated");
  tile.style.animationName = "down-slide";
  preventClick = true;
  setTimeout(function(){ swapTile(tile);}, 450);
  setTimeout(function(){ preventClick = false; }, 500);
}

/**
 * Called by tileSlideDown, tileSlideUp, tileSlideLeft or tileSlideRight following animation slide
 * Unsets animation name and swaps the position of clicked tile and tile-7
 * Calls checkWin function
 */
function swapTile(tile) {
  tile.style.animationName = "";
    let tilePosition = tile.style.gridArea;
    console.log(tilePosition);
    let spacePosition = document.getElementById("tile-7").style.gridArea;
    console.log(spacePosition);
    tile.style.gridArea = spacePosition;
    document.getElementById("tile-7").style.gridArea = tilePosition;
    console.log("tiles swapped");
    checkWin();
}

/**
 * Called every time a tile is moved by swapTile
 * Checks to see if each tile is in it's correct start position
 * When win is achieved win.html is then opened in the current tab
 */
function checkWin() {
  if (
    document.getElementById("tile-1").style.gridArea === "1 / 1 / 2 / 2"
    && document.getElementById("tile-2").style.gridArea === "1 / 2 / 2 / 3"
    && document.getElementById("tile-3").style.gridArea === "1 / 3 / 2 / 4"
    && document.getElementById("tile-4").style.gridArea === "2 / 1 / 3 / 2"
    && document.getElementById("tile-5").style.gridArea === "2 / 2 / 3 / 3"
    && document.getElementById("tile-6").style.gridArea === "2 / 3 / 3 / 4"
    && document.getElementById("tile-7").style.gridArea === "3 / 1 / 4 / 2"
    && document.getElementById("tile-8").style.gridArea === "3 / 2 / 4 / 3"
    && document.getElementById("tile-9").style.gridArea === "3 / 3 / 4 / 4"
  ) {
    open("win.html", "_self");
  }
  else {
    console.log("win not achieved");
  }
}

/** 
 * The following modal functions: sneakyPeak, instructions and tips 
 * were created following the steps given in 'How To - CSS/JS Modal' by W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp
*/

/**
 * Called when the Sneaky peek button is clicked. Click event Listener activated on load.
 * Sneaky Peek modal displayed block and visible. Sneaky Peek image added.
 * Click event listener added to close symbol with anonymous function to hide modal.
 * Tile click event listeners prevented from activating further code while modal displayed.
 */
function sneakyPeak() {
  // Display modal
  let modal = document.getElementById("modal-sneaky-peek");
  modal.style.display = "block";
  // Prevent tile click event listeners for activating further code
  preventClick = true;
  // Add image
  let image = document.getElementById("sneaky-peek-pic");
  image.src = "assets/images/Puffin/puffin-sneaky-peek.webp";
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementsByClassName("close")[0];
  closeCross.onclick = function() {
    // Allow click event listeners to activate further code
    preventClick = false;
    // Hide modal 
    modal.style.display = "none";
  }
}

/**
 * Called when the Instructions button is clicked. Click event Listener activated on load.
 * Instructions modal displayed block and visible. 
 * Click event listener added to close symbol with anonymous function to hide modal.
 * Tile click event listeners prevented from activating further code while modal displayed.
 */
function instructions() {
  // Display modal
  let modal = document.getElementById("modal-instructions");
  modal.style.display = "block";
  // Prevent tile click event listeners for activating further code
  preventClick = true;
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementsByClassName("close")[0];
  closeCross.onclick = function() {
    // Allow click event listeners to activate further code
    preventClick = false;
    // Hide modal 
    modal.style.display = "none";
  }
}