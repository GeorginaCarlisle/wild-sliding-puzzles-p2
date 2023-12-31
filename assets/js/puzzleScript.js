// Global variables that need to be accessible in multiple functions
let preventClick = false; //Tile click event listeners currently active

// Load page before setting the game picture
window.onload = chooseGamePicture();

// Load page before adding event listeners to modal buttons
window.onload = function() {
  // Add click event listener to the Sneaky peek button
  let btnSneakyPeek = document.getElementById("button-sneaky-peek");
  btnSneakyPeek.addEventListener('click', sneakyPeak);
  // Add click event listener to the Instructions button
  let btnInstructions = document.getElementById("button-instructions");
  btnInstructions.addEventListener('click', instructions);
  // Add click event listener to the Tips button
  let btnTips = document.getElementById("button-tips");
  btnTips.addEventListener('click', tips);
};

/**
 * Called on load
 * Generates a random number and checks to see if that puzzle number has already been completed
 * While there is a match a new number will be genereated until no match is present, a break out after 100 iterations is included
 * New puzzle number saved in local storage and setGamePicture is called
 */
function chooseGamePicture() {
  // Generate a random number, range of random numbers generated reflects the number of puzzle pictures available
  let pictureNumber = Math.floor(Math.random() * 3);
  // link to session storage
  let previousPictureNumbers = sessionStorage.getItem("completedPictures");
  // Check to see if any pictures have been completed
  if (previousPictureNumbers){
    // There has been a previous picture number saved
    let positionOfMatch = previousPictureNumbers.search(pictureNumber);
    // New number doesn't match any of previous numbers
    if (positionOfMatch === -1) {
      // New picture number now added to the string
      let newPictureNumbers = previousPictureNumbers + pictureNumber;
      sessionStorage.setItem("completedPictures", newPictureNumbers);
      // Call setGamePicture and pass on the chosen picture number
      setGamePicture(pictureNumber);
    }
    // New number does match a previous number
    else {
      // Following loop to run until there is no match, or break point reached
      let loop = 0;
      while (positionOfMatch !== -1) {
        loop++;
        // generate a new random number
        pictureNumber = Math.floor(Math.random() * 3);
        // checks for a match
        positionOfMatch = previousPictureNumbers.search(pictureNumber);
        // break out clause to prevent loop from running indefinitely
        if (loop === 100) {
          sessionStorage.removeItem("completedPictures");
          alert("All available puzzles have now been viewed. Puzzle data will now be reset and previously shown puzzles will be shown again");
          break;
        }
        else {
          continue;
        }
      }
      // New picture number now generated that doesn't match
      // New picture number now added to the string. Reset previousPictureNumbers variable to pick up clearing of data when all puzzles have been completed.
      previousPictureNumbers = sessionStorage.getItem("completedPictures");
      let newPictureNumbers = previousPictureNumbers + pictureNumber;
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
      `url(assets/images/puffin-images/puffin-tile-1.webp)`,
      `url(assets/images/puffin-images/puffin-tile-2.webp)`,
      `url(assets/images/puffin-images/puffin-tile-3.webp)`,
      `url(assets/images/puffin-images/puffin-tile-4.webp)`,
      `url(assets/images/puffin-images/puffin-tile-5.webp)`,
      `url(assets/images/puffin-images/puffin-tile-6.webp)`,
      ``,
      `url(assets/images/puffin-images/puffin-tile-8.webp)`,
      `url(assets/images/puffin-images/puffin-tile-9.webp)`,
      ];
    break;
    case 1:
      tilePictures = [
      `url(assets/images/bee/bee-tile-1.webp)`,
      `url(assets/images/bee/bee-tile-2.webp)`,
      `url(assets/images/bee/bee-tile-3.webp)`,
      `url(assets/images/bee/bee-tile-4.webp)`,
      `url(assets/images/bee/bee-tile-5.webp)`,
      `url(assets/images/bee/bee-tile-6.webp)`,
      ``,
      `url(assets/images/bee/bee-tile-8.webp)`,
      `url(assets/images/bee/bee-tile-9.webp)`,
      ];
    break;
    case 2:
      tilePictures = [
      `url(assets/images/oak/ancient-oak-tile-1.webp)`,
      `url(assets/images/oak/ancient-oak-tile-2.webp)`,
      `url(assets/images/oak/ancient-oak-tile-3.webp)`,
      `url(assets/images/oak/ancient-oak-tile-4.webp)`,
      `url(assets/images/oak/ancient-oak-tile-5.webp)`,
      `url(assets/images/oak/ancient-oak-tile-6.webp)`,
      ``,
      `url(assets/images/oak/ancient-oak-tile-8.webp)`,
      `url(assets/images/oak/ancient-oak-tile-9.webp)`,
      ];
    break;
    default:
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
  scrambleGamePicture();
}

/**
 * Called by setGamePicture
 * Randomly choses a scramble setting
 * Places each tile in a different grid position as per scrambleSetting
 * ScrambleSetting has been tested to ensure the puzzle is solvable
 */
function scrambleGamePicture() {
  // Generate a random number, range of random numbers generated reflects the number of scramble settings available
  let scrambleNumber = Math.floor(Math.random() * 4);
  // Array items specify a grid area (grid-row-start/grid-column-start/grid-row-end/column-row-end) 
  let scrambleSetting = [];
  switch(scrambleNumber) {
    case 0: 
      scrambleSetting = [
        "2/1/3/2",
        "3/2/4/3",
        "1/2/2/3",
        "3/3/4/4",
        "2/2/3/3",
        "1/3/2/4",
        "3/1/4/2",
        "1/1/2/2",
        "2/3/3/4"
      ];
    break;
    case 1: 
      scrambleSetting = [
        "3/3/4/4",
        "1/3/2/4",
        "2/3/3/4",
        "1/2/2/3",
        "2/1/3/2",
        "3/2/4/3",
        "3/1/4/2",
        "2/2/3/3",
        "1/1/2/2"
      ];
    break;
    case 2: 
      scrambleSetting = [
        "1/1/2/2",
        "3/3/4/4",
        "1/2/2/3",
        "2/2/3/3",
        "1/3/2/4",
        "3/2/4/3",
        "3/1/4/2",
        "2/1/3/2",
        "2/3/3/4"
    ];
    break;
    case 3: 
      scrambleSetting = [
        "3/2/4/3",
        "2/3/3/4",
        "2/1/3/2",
        "1/1/2/2",
        "1/2/2/3",
        "2/2/3/3",
        "3/1/4/2",
        "3/3/4/4",
        "1/3/2/4"
    ];
    break;
    default:
      alert("scramble setting cannot be found, please contact developer");
    break;
  }
  // loop to give each tile in turn it's scrambled grid-area value
  for (let i = 0; i < 9; i++) {
    let tile = document.getElementById('tile-' + (i+1));
    tile.style.gridArea = scrambleSetting[i];
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
    let gridPosition = tile.style.gridArea;
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
    let spacePosition = document.getElementById("tile-7").style.gridArea;
    tile.style.gridArea = spacePosition;
    document.getElementById("tile-7").style.gridArea = tilePosition;
    checkWin();
}

/**
 * Called every time a tile is moved by swapTile
 * Checks to see if each tile is in it's correct start position
 * When win is achieved win.html is then opened in the current tab
 */
function checkWin() {
  if (
    document.getElementById("tile-1").style.gridArea === "1 / 1 / 2 / 2" && 
    document.getElementById("tile-2").style.gridArea === "1 / 2 / 2 / 3" && 
    document.getElementById("tile-3").style.gridArea === "1 / 3 / 2 / 4" && 
    document.getElementById("tile-4").style.gridArea === "2 / 1 / 3 / 2" && 
    document.getElementById("tile-5").style.gridArea === "2 / 2 / 3 / 3" && 
    document.getElementById("tile-6").style.gridArea === "2 / 3 / 3 / 4" && 
    document.getElementById("tile-7").style.gridArea === "3 / 1 / 4 / 2" && 
    document.getElementById("tile-8").style.gridArea === "3 / 2 / 4 / 3" && 
    document.getElementById("tile-9").style.gridArea === "3 / 3 / 4 / 4"
  ) {
    // Add a slight pause before loading the win page
    setTimeout(function(){ open("win.html", "_self");}, 1000);
  }
}

/**
 * Called when the Sneaky peek button is clicked. Click event Listener activated on load.
 * Sneaky Peek modal displayed block and visible. 
 * Current puzzle number located and associated Sneaky Peek image added.
 * Click event listener added to close symbol with anonymous function to hide modal.
 * Tile click event listeners prevented from activating further code while modal displayed.
 */
function sneakyPeak() {
  // Display modal. Modal created following the steps given in 'How To - CSS/JS Modal' by W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp
  let modal = document.getElementById("modal-sneaky-peek");
  modal.style.display = "block";
  // Prevent tile click event listeners for activating further code
  preventClick = true;
  // Locate current puzzle number
  let completedPuzzleNumbers = sessionStorage.getItem("completedPictures");
  let currentPuzzle = completedPuzzleNumbers.charAt(completedPuzzleNumbers.length -1);
  // Locate current sneaky peek image and associated alt text
  let currentImage = [];
  let imageContainer = document.getElementById("container-sneaky-peek-pic");
  switch(currentPuzzle) {
    case "0": 
      currentImage = `<img src="assets/images/puffin-images/puffin-sneaky-peek.webp" 
      alt="The completed puzzle picture, showing a Puffin, with all the tiles in the correct position" 
      id="sneaky-peek-pic">`;
    break;
    case "1": 
      currentImage = `<img src="assets/images/bee/bee-sneaky-peek.webp" 
      alt="The completed puzzle picture, showing a Bee, with all the tiles in the correct position" 
      id="sneaky-peek-pic">`;
    break;
    case "2": 
      currentImage = `<img src="assets/images/oak/ancient-oak-sneaky-peek.webp" 
      alt="The completed puzzle picture, showing an ancient oak, with all the tiles in the correct position" 
      id="sneaky-peek-pic">`;
    break;
    default:
      alert("Sneaky peek picture cannot be found, please contact developer");
    break;
  }
  // Add sneaky peek image to DOM
  imageContainer.innerHTML = currentImage;
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementById("close-sneaky-peek");
  closeCross.onclick = function() {
    // Allow click event listeners to activate further code
    preventClick = false;
    // Hide modal 
    modal.style.display = "none";
  };
}

/**
 * Called when the Instructions button is clicked. Click event Listener activated on load.
 * Instructions modal displayed block and visible. 
 * Click event listener added to close symbol with anonymous function to hide modal.
 * Tile click event listeners prevented from activating further code while modal displayed.
 */
function instructions() {
  // Display modal. Modal created following the steps given in 'How To - CSS/JS Modal' by W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp
  let modal = document.getElementById("modal-instructions");
  modal.style.display = "block";
  // Prevent tile click event listeners for activating further code
  preventClick = true;
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementById("close-instructions");
  closeCross.onclick = function() {
    // Allow click event listeners to activate further code
    preventClick = false;
    // Hide modal 
    modal.style.display = "none";
  };
}

/**
 * Called when the Tips button is clicked. Click event Listener activated on load.
 * Tips modal displayed block and visible. 
 * Click event listener added to close symbol with anonymous function to hide modal.
 * Tile click event listeners prevented from activating further code while modal displayed.
 */
function tips() {
  // Display modal. Modal created following the steps given in 'How To - CSS/JS Modal' by W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp
  let modal = document.getElementById("modal-tips");
  modal.style.display = "block";
  // Prevent tile click event listeners for activating further code
  preventClick = true;
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementById("close-tips");
  closeCross.onclick = function() {
    // Allow click event listeners to activate further code
    preventClick = false;
    // Hide modal 
    modal.style.display = "none";
  };
}