// Load page before setting the game picture
window.onload = setGamePicture();

/**
 * Set game picture will be called once page has loaded.
 * A style background image will be applied to each tile in the grid
 * the background image for 1 tile will remain empty
 * picture set correct at this point and the scramblePicture function will now be called
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
    let tile = document.getElementById("tile-" + (i+1));
    tile.style.backgroundImage = tilePictures[i];
  }
  console.log("Game picture set");
}




