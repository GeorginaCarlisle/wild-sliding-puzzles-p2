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
  loadPuzzleName(currentPuzzle);
  loadPuzzleInformation(currentPuzzle);
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
    case "1":
      puzzlePicture = `<img src="assets/images/bee/bee-original.webp" alt="Image of a Puffin with a catch of fish in it's mouth. Image shows Puffin's head and brightly coloured orange beak." class="image">`;
    break;
    default: alert("puzzle completed not recoginsed, please contact developer");
    break;
  }
  let pictureContainer = document.getElementById("original-picture");
  pictureContainer.innerHTML = puzzlePicture;
}

/**
 * Called by locatePuzzleNumber
 * currentPuzzle argument is used to select corrosponding puzzle name
 * Puzzle name is then loaded to the DOM
 */
function loadPuzzleName(currentPuzzle) {
  let puzzleName = "";
  switch (currentPuzzle) {
    case "0":
      puzzleName = "Puffin";
    break;
    case "1":
      puzzleName = "Bee";
    break;
    default: alert("puzzle completed not recoginsed, please contact developer");
    break;
  }
  let nameSpan = document.getElementById("subject");
  nameSpan.innerHTML = puzzleName;
  console.log("Puzzle name is:" + puzzleName)
}

/**
 * Called by locatePuzzleNumber
 * currentPuzzle argument is used to select corrosponding puzzle information
 * Puzzle information is then loaded to the DOM
 */
function loadPuzzleInformation(currentPuzzle) {
  let puzzleInformation = ``;
  switch (currentPuzzle) {
    case "0":
      puzzleInformation = `
        <p>With their colourful bills and black and white plumage, puffins are unmistakable visitors to our shores. 
        But their nesting sites and food supply are under threat, and their UK population could plummet by up to 
        90% in the next 30 years.</p> 
        <p>Atlantic puffins spend most of their lives out at sea, resting on the water and diving for sandeels. 
        They don’t normally dive very deep but can go down to an incredible 50 metres or more – the height of the 
        Leaning Tower of Pisa.</p>
        <p>When it’s time to breed, they head for dry land, and every spring the UK welcomes roughly 10% of the 
        world’s puffin population. In large colonies, individuals reunite with their life-long mate and lay one 
        precious egg, usually in a burrow or a rocky crevice. For six weeks they work together to keep the egg warm 
        until the chick hatches.</p>
        <p>A puffin chick, or ‘puffling,’ weighs just 40g when it first emerges. Six weeks later, it weighs about 320g. 
        It takes a lot of food to grow this quickly and pufflings need plenty of energy-rich, oily fish such as sprat 
        and sandeels. But the climate crisis warming our oceans means these cold-water fish are on the decline, a 
        problem that’s being made worse by sandeel fisheries.</P>
        <p>`;
    break;
    case "1":
      puzzleInformation = `
      <p>Where would we be without bees?</p>
      <p>They’re vital to food security and part of the backbone of our wild isles, allowing the UK to support a rich 
      diversity of plants and wildlife. But with bee numbers in global decline, protecting them needs to be high on 
      everyone’s agenda.</P>
      <p>We most often think of honeybees and bumblebees, but did you know there are 270 species of bee in the UK? 
      Each one plays a special role in keeping our meadows, woodlands, heathlands and hedgerows alive, with forager 
      bees flying incredible distances for pollen and nectar, pollinating trees and flowers as they go.</p>
      <p>It’s hard to illustrate just how important these industrious insects are to us. They’re part of how we support 
      a rich biodiversity of plants and wildlife and are essential to our food and economy – globally, around a third 
      of our crops depend on bees and other pollinators.</p>
      <p>To protect bees and other insects, we need to restore wild areas and plant more wildflowers. We need to support 
      our farmers to produce food in a nature-friendly way and reduce the use of harmful pesticides. And we need to 
      continue to fight for a stable climate.</p>
      <p>Bees are critical for nature and our own survival. If we’re going to bring our world back to life, bees are a 
      good place to start.</p>`;
    break;
    default: alert("puzzle completed not recoginsed, please contact developer");
    break;
  }
  let nameSpan = document.getElementById("information");
  nameSpan.innerHTML = puzzleInformation;
}