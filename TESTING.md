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
##### Initial error

![Image showing validation error for index.html](documentation/code-validation/index.html-validation-error.png)

I fixed this error by removing the offending / from the favicon link in all HTML pages

#### Puzzle.html

##### Initial error

![Image showing validation error for puzzle.html](documentation/code-validation/puzzle.html-validation-error.png)

I fixed this error by removing the image element from the HTML document and instead creating an empty div into which the puzzleScript.js now inserts the full image element instead of just updating the src.

#### Win.html

[Return to contents list](#contents)

### CSS Validation

[Return to contents list](#contents)

### JavaScript Validation

##### Initial errors for indexScript.js

![Image showing validation errors for indexScript.js](documentation/code-validation/indexScript.js-validation-errors.png)

I fixed these errors by inserting the missing semicolons in lines 6 and 22

##### Initial errors for puzzleScript.js

![Image showing validation errors for puzzleScript.js](documentation/code-validation/puzzleScript.js-validation-errors.png)

I fixed these errors by:
- inserting the missing semicolons in lines 18, 65, 559. 581 and 603
- removing the line breaks before the && and placing after instead, lines 497 - 505

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

[Return to contents list](#contents)

## Browser Testing

[Return to contents list](#contents)

## Reponsive Testing

[Return to contents list](#contents)

## User Testing

[Return to contents list](#contents)

## Manual Testing

[Return to contents list](#contents)