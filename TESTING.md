# Testing for 'Wild Sliding Puzzles'
Developer: Georgina Carlisle

## Contents

[Code Validation](#code-validation)
- [HTML Validation](#html-validation)
- [CSS Validation](#css-validation)
- [JavaScript Validation](#javascript-validation)

[Performance](#performance)

[Accessibility Testing](#accessibility-testing)

[Browser Testing](#browser-testing)

[Reponsive Testing](#reponsive-testing)

[User Testing](#user-testing)

[Manual Testing](#manual-testing)

## Code Validation

### HTML Validation

#### Index.html

![Image showing validation for index.html](documentation/code-validation/index.html-validation.png)

##### Initial error

![Image showing validation error for index.html](documentation/code-validation/index.html-validation-error.png)

I fixed this error by removing the offending / from the favicon link in all HTML pages

#### Puzzle.html

![Image showing validation for puzzle.html](documentation/code-validation/puzzle.html-validation.png)

Warning left in this instance. Aria-label used to provide an explanation of the puzzle grid which cannot be ascertained from the html.

##### Initial error

![Image showing validation error for puzzle.html](documentation/code-validation/puzzle.html-validation-error.png)

I fixed this error by removing the image element from the HTML document and instead creating an empty div into which the puzzleScript.js now inserts the full image element instead of just updating the src.

#### Win.html

![Image showing validation for win.html](documentation/code-validation/win.html-validation.png)

[Return to contents list](#contents)

### CSS Validation

![Image showing validation for style.css](documentation/code-validation/css-validation.png)

[Return to contents list](#contents)

### JavaScript Validation

#### IndexScript.js

![Image showing validation for indexScript.js](documentation/code-validation/css-validation.png)

##### Initial errors for indexScript.js

![Image showing validation errors for indexScript.js](documentation/code-validation/indexScript.js-validation.png)

I fixed these errors by inserting the missing semicolons in lines 6 and 22

#### PuzzleScript.js

![Image showing validation for puzzleScript.js](documentation/code-validation/puzzleScript.js-validation.png)

Warning left in this instance as performance and function of the puzzle is not effected with no errors or warnings brought up during any other testing.

##### Initial errors for puzzleScript.js

![Image showing validation errors for puzzleScript.js](documentation/code-validation/puzzleScript.js-validation-errors.png)

I fixed these errors by:

- inserting the missing semicolons in lines 18, 65, 559. 581 and 603

- removing the line breaks before the && and placing after instead, lines 497 - 505

#### WinScript.js

![Image showing validation for winScript.js](documentation/code-validation/winScript.js-validation.png)

##### Initial errors for winScript.js

![Image showing validation errors for winScript.js](documentation/code-validation/winScript.js-validation-errors.png)

I fixed these errors by inserting the missing semicolons in lines 63 and 136

[Return to contents list](#contents)

## Performance

### Initial performance measures

Performance scores for win.html on desktop and all pages on mobile were initially quite low

#### Index.html on mobile
![Initial lighthouse score on mobile for index.html](documentation/lighthouse/index.html-mobile-initial-lighthouse.png)

Steps taken to improve performance:
- Reduce image size of landing-page-1.webp and landing-page-2.webp

#### Puzzle.html on mobile
![Initial lighthouse score on mobile for puzzle.html](documentation/lighthouse/puzzle.html-mobile-initial-lighthouse.png)

#### Win.html on desktop and mobile
Desktop:
![Initial lighthouse score on desktop for win.html](documentation/lighthouse/win.html-desktop-initial-lighthouse.png)
Mobile:
![Initial lighthouse score on mobile for win.html](documentation/lighthouse/win.html-mobile-initial-lighthouse.png)

Steps taken to improve performance:
- Reduce image size of all original pictures

[Return to contents list](#contents)

## Accessibility Testing

#### Wave report for the landing page

![Wave report for landing page](documentation/wave-testing/landing-page-wave-testing.png)

#### Wave report for the puzzle page

![Wave report for puzzle page](documentation/wave-testing/puzzle-page-wave-testing.png)

#### Wave report for the win page

![Wave report for win page](documentation/wave-testing/win-page-wave-testing.png)

[Return to contents list](#contents)

## Browser Testing

[Return to contents list](#contents)

## Reponsive Testing

[Return to contents list](#contents)

## User Testing

[Return to contents list](#contents)

## Manual Testing

[Return to contents list](#contents)