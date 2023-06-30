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

function gridOneClicked(tile) {
  console.log(tile + "in grid one");
}

function gridTwoClicked(tile) {
  console.log(tile + "in grid two");
}

function gridThreeClicked(tile) {
  console.log(tile + "in grid three");
}

function gridFourClicked(tile) {
  console.log(tile + "in grid four");
}

function gridFiveClicked(tile) {
  console.log(tile + "in grid five");
}

function gridSixClicked(tile) {
  console.log(tile + "in grid six");
}

function gridSevenClicked(tile) {
  console.log(tile + "in grid seven");
}

function gridEightClicked(tile) {
  console.log(tile + "in grid eight");
}

function gridNineClicked(tile) {
  console.log(tile + "in grid nine");
}





