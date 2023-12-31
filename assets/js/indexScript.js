// Load page before adding event listeners to modal button
window.onload = function() {
  // Add click event listener to the Instructions button
  let btnInstructions = document.getElementById("button-instructions");
  btnInstructions.addEventListener('click', instructions);
};

/**
 * Called when the Instructions button is clicked. Click event Listener activated on load.
 * Instructions modal displayed block and visible. 
 * Click event listener added to close symbol with anonymous function to hide modal.
 */
function instructions() {
  // Display modal. Modal created following the steps given in 'How To - CSS/JS Modal' by W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp
  let modal = document.getElementById("modal-instructions");
  modal.style.display = "block";
  // Add click event listener to close symbol that changes display back to none and re-hides modal
  let closeCross = document.getElementsByClassName("close")[0];
  closeCross.onclick = function() {
    // Hide modal 
    modal.style.display = "none";
  };
}