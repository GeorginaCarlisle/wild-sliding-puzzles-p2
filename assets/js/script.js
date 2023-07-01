// Load page before setting the game picture
window.onload = setGamePicture();

/**
 * Set game picture will be called once page has loaded.
 * A style background image will be applied to each tile in the grid, as well as a click event listener
 * the background image for tile 7 will remain empty
 * picture is set correct at this point and the scramblePicture function will now be called
 */
function setGamePicture() {
  let tilePictures = [
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
  let numberOfTiles = tilePictures.length;
  // loop assigning each tile in turn an image, images applied in array order so that the correct image ends up in the correct tile
  for (let i = 0; i < numberOfTiles; i++) {
    let tile = document.getElementById('tile-' + (i+1));
    tile.style.backgroundImage = tilePictures[i];
    // Event listener added to each tile which passes the details of the tile clicked to the clickedTile function
    tile.addEventListener('click', function(){ clickedTile(tile);});
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
 * Swaps grid position of clicked tile and tile-7 (empty space)
 * Calls checkWin function
 */
function tileSlideRight(tile) {
  let tilePosition = tile.style.gridArea;
  let spacePosition = document.getElementById("tile-7").style.gridArea;
  console.log("slide tile right. Tile is at: " + tilePosition + ". space is at: " + spacePosition);
  tile.style.gridArea = spacePosition;
  document.getElementById("tile-7").style.gridArea = tilePosition;
  checkWin();
}

/**
 * Called when clickedTile is in the grid box to the right of the space (tile-7)
 * Swaps grid position of clicked tile and tile-7 (empty space)
 * Calls checkWin function
 */
function tileSlideLeft(tile) {
  let tilePosition = tile.style.gridArea;
  let spacePosition = document.getElementById("tile-7").style.gridArea;
  console.log("slide tile left. Tile is at: " + tilePosition + ". space is at: " + spacePosition);
  tile.style.gridArea = spacePosition;
  document.getElementById("tile-7").style.gridArea = tilePosition;
  checkWin();
}

/**
 * Called when clickedTile is in the grid box below the space (tile-7)
 * Swaps grid position of clicked tile and tile-7 (empty space)
 * Calls checkWin function
 */
function tileSlideUp(tile) {
  let tilePosition = tile.style.gridArea;
  let spacePosition = document.getElementById("tile-7").style.gridArea;
  console.log("slide tile up. Tile is at: " + tilePosition + ". space is at: " + spacePosition);
  tile.style.gridArea = spacePosition;
  document.getElementById("tile-7").style.gridArea = tilePosition;
  checkWin();
}

/**
 * Called when clickedTile is in the grid box above the space (tile-7)
 * Swaps grid position of clicked tile and tile-7 (empty space)
 * Calls checkWin function
 */
function tileSlideDown(tile) {
  let tilePosition = tile.style.gridArea;
  let spacePosition = document.getElementById("tile-7").style.gridArea;
  console.log("slide tile down. Tile is at: " + tilePosition + ". space is at: " + spacePosition);
  tile.style.gridArea = spacePosition;
  document.getElementById("tile-7").style.gridArea = tilePosition;
  checkWin();
}

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
    alert("Puzzle completed! Well done!");
    console.log("win achieved");
  }
  else {
    console.log("win not achieved");
  }
}



